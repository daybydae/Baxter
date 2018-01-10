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

require 'test_helper'

class SitterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
