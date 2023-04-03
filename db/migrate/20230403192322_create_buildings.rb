class CreateBuildings < ActiveRecord::Migration[7.0]
  def change
    create_table :buildings do |t|
      t.string :location, null: false
      t.string :address, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :buildings, :name
  end
end
