class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.bigint :user_id, null: false
      t.bigint :listing_id, null: false
      t.timestamps
    end
    add_index :favorites, :user_id
    add_index :favorites, :listing_id
    add_foreign_key :favorites, :listings
    add_foreign_key :favorites, :users
    add_foreign_key :listings, :buildings, column: :building_id
  end
end
