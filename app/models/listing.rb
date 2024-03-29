# == Schema Information
#
# Table name: listings
#
#  id           :bigint           not null, primary key
#  location     :string           not null
#  address      :string           not null
#  description  :text
#  lister_id    :bigint           not null
#  building_id  :bigint
#  type         :string           not null
#  price        :bigint           not null
#  num_bedrooms :bigint           not null
#  num_baths    :bigint           not null
#  borough      :string           not null
#
class Listing < ApplicationRecord
    validates :lister_id, :price, :description, :address, :num_baths, :num_bedrooms, :borough, presence: true
    validates :rental, inclusion: {in: [true, false]}

    belongs_to :user,
    class_name: 'User',
    foreign_key: :lister_id

    has_many :favorites, 
    class_name: 'Favorite',
    foreign_key: :listing_id,
    primary_key: :id,
    dependent: :destroy

    has_many :user_favorites,
    through: :favorites,
    source: :user

    has_one_attached :photo, 
    dependent: :destroy
end
