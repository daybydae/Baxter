class Sitter < ApplicationRecord
  validates :sittername, :location, :rates, presence: true
  validates :lat, :lng, presence: true

  # has_many :favorites,
  # has_many: :favorite_users,
  #   through: :favorites,
  #   source: :user

end
