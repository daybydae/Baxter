json.extract! user, :id, :username, :email, :address, :description, :lat, :lng
json.image_url asset_path(user.image.url)
