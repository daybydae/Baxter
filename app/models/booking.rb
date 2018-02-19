# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  sitter_id  :integer          not null
#  user_id    :integer          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :sitter, presence: true
  validates :start_date, :end_date, presence: true
  validates :sitter_id, :user_id, presence: true

  belongs_to :sitter
  belongs_to :user

end
