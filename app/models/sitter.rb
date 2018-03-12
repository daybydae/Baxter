# == Schema Information
#
# Table name: sitters
#
#  id                 :integer          not null, primary key
#  sittername         :string           not null
#  location           :string           not null
#  rates              :float            not null
#  description        :text
#  lat                :float            not null
#  lng                :float            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Sitter < ApplicationRecord
  validates :sittername, :location, :rates, presence: true
  validates :lat, :lng, presence: true
  # validates :bookings

  has_attached_file :image, default_url: "pug.jpg", styles: {thumb: "500x500#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  has_many :bookings


  def self.in_bounds(bounds)

    lat_low = bounds["south"].to_f
    lat_high = bounds["north"].to_f
    lng_low = bounds["west"].to_f
    lng_high = bounds["east"].to_f
    Sitter.all.select { |sitter| sitter.in_bounds?(lat_low, lat_high, lng_low, lng_high)}

  end

  def in_bounds?(lat_low, lat_high, lng_low, lng_high)
    self.lat.between?(lat_low, lat_high) && self.lng.between?(lng_low, lng_high)
  end
end
