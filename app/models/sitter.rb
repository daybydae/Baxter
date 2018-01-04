class Sitter < ApplicationRecord
  validates :sittername, :rates, presence: true
  validates :verified, :current_user_favorite, presence: true

end
