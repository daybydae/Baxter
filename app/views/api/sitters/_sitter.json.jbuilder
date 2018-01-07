json.extract! sitter, :id, :description, :lat, :lng, :location, :rates, :sittername

json.image_url asset_path(sitter.image.url)
