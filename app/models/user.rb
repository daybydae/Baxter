# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  address            :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  description        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  username           :string           not null
#  lat                :float            not null
#  lng                :float            not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  # validates :bookings

  has_attached_file :image, default_url: "bulldog.png", styles: {thumb: "500x500#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # has_many :favorites

  has_many :bookings


  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
