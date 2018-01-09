class Sitter < ApplicationRecord
  validates :sittername, :location, :rates, presence: true
  validates :lat, :lng, presence: true

  has_attached_file :image, default_url: "pug.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # has_many :favorites,
  # has_many: :favorite_users,
  #   through: :favorites,
  #   source: :user

end
