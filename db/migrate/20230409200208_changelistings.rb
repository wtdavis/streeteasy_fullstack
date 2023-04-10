class Changelistings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :unit, :string, null: false
    remove_index  :listings, column: :location
  end
end
