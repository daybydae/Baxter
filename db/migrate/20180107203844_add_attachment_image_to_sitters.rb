class AddAttachmentImageToSitters < ActiveRecord::Migration[5.1]
  def self.up
    change_table :sitters do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :sitters, :image
  end
end
