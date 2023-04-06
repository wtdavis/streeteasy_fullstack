# == Schema Information
#
# Table name: buildings
#
#  id          :bigint           not null, primary key
#  location    :string           not null
#  address     :string           not null
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Building < ApplicationRecord
    validates :location, :address, :name, :description, presence: true

    has_many :listings,
    class_name: 'Listing',
    foreign_key: :building_id,
    primary_key: :id

    
end
