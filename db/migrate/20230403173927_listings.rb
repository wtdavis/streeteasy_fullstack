class Listings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :location, null: false
      t.string :address, null: false
      t.text :description
      t.bigint :lister_id, null: false
      t.bigint :building_id
      t.string :type, null: false
      t.bigint :price, null: false
      t.bigint :num_bedrooms, null: false
      t.bigint :num_baths, null: false
      t.string :borough, null: false

    end
    add_index :listings, :location, unique: true
    add_foreign_key :listings, :users, column: :lister_id
  end
end
