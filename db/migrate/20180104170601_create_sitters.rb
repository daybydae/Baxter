class CreateSitters < ActiveRecord::Migration[5.1]
  def change
    create_table :sitters do |t|
      t.string :sittername, null: false
      t.string :location, null: false
      t.string :rates, null: false
      t.text :description
      t.boolean :verified, default: false
      t.boolean :current_user_favorite, default: false

      t.timestamps
    end
    add_index :sitters, :location
  end
end
