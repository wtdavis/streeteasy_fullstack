# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    validates :session_token, :email, :username, presence: true, uniqueness: true
    validates :username, :email, length: {in: 6..100}
    validates :password_digest, presence: true
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP, message: 'Invalid email'}
    validates :password, allow_nil: true, length: {in: 6..100}
    before_validation :ensure_session_token


    def self.find_by_credentials(credential, password)

        if URI::MailTo::EMAIL_REGEXP.match(credential)
            user = User.find_by(email: credential)
        else
            user = User.find_by(username: credential)
        end
        if user && user.authenticate(password)
            return user
        else
            return nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        return self.session_token
    end


    private 

    def generate_unique_session_token
        token = SecureRandom.urlsafe_base64
        while User.exists?(session_token: token)
            token = SecureRandom.urlsafe_base64
        end
        return token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end


end
