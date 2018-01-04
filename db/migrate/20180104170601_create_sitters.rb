class CreateSitters < ActiveRecord::Migration[5.1]
  def change
    create_table :sitters do |t|
      t.string :sittername, null: false
      t.string :location, null: false
      t.float :rates, null: false
      t.text :description

      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end

    add_index :sitters, :lat
    add_index :sitters, :lng
  end
end
