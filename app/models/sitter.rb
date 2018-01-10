class Sitter < ApplicationRecord
  validates :sittername, :location, :rates, presence: true
  validates :lat, :lng, presence: true

  has_attached_file :image, default_url: "pug.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # has_many :favorites,
  # has_many: :favorite_users,
  #   through: :favorites,
  #   source: :user

  def self.in_bounds(bounds)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here

  lat_low = bounds["southWest"]["lat"].to_f
  lat_high = bounds["northEast"]["lat"].to_f
  lng_low = bounds["southWest"]["lng"].to_f
  lng_high = bounds["northEast"]["lng"].to_f
  
  Sitter.all.select { |sitter| sitter.in_bounds?(lat_low, lat_high, lng_low, lng_high)}

  end

  def in_bounds?(lat_low, lat_high, lng_low, lng_high)
    self.lat.between?(lat_low, lat_high) && self.lng.between?(lng_low, lng_high)
  end
end
