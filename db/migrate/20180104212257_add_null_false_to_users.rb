class AddNullFalseToUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :lat
    add_column :users, :lat, :float, null: false

    remove_column :users, :lng
    add_column :users, :lng, :float, null: false
  end
end
