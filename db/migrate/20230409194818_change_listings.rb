class ChangeListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :building_id
    remove_column :listings, :type
    add_column :listings, :rental, :boolean, null: false
    add_column :listings, :building_id, :bigint, null: false
  end
end
