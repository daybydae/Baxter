class Sitter < ApplicationRecord
  validates :sittername, :location, :rates, presence: true
  validates :lat, :lng, presence: true




end
