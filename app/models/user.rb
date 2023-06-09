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
    validates :session_token, :email, presence: true, uniqueness: true
    validates :email, length: {in: 6..100}
    validates :password_digest, presence: true
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP, message: 'Invalid email'}
    validates :password, allow_nil: true, length: {in: 6..100}
    before_validation :ensure_session_token

    has_many :listings,
    class_name: 'Listing',
    foreign_key: :lister_id,
    dependent: :destroy

    has_many :favorites,
    class_name: 'Favorite',
    foreign_key: :user_id, 
    dependent: :destroy

    has_many :favorited_listings,
    through: :favorites,
    source: :listing,
    dependent: :destroy


    def self.find_by_credentials(credential, password)
# debugger
        user = User.find_by(email: credential)
        # if URI::MailTo::EMAIL_REGEXP.match(credential)
        # else
            # user = User.find_by(username: credential)
        # end
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
