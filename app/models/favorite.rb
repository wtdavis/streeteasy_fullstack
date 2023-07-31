# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  listing_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
validates :user_id, :listing_id, presence: true
validates :listing_id, uniqueness: {scope: :user_id}

belongs_to :user,
class_name: 'User',
foreign_key: :user_id

belongs_to :listing,
class_name: 'Listing',
foreign_key: :listing_id
end
