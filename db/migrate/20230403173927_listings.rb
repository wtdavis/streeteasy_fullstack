class Listings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :location, null: false
      t.string :description
      t.string :lister_id, null: false
      t.string :type, null: false
    end
  end
end
