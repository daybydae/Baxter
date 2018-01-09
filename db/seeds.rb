# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sitter.delete_all
User.delete_all

Sitter.create!(
  sittername: "Maurice",
  location: "107 E 105th Street, New York, NY 10029",
  rates: 100.00,
  description: 'Cool guy who loves to help Dae',
  lat: 40.792145,
  lng: -73.947738,
)

Sitter.create!(
  sittername: "David",
  location: "102 103rd Street, New York, NY 10029",
  rates: 75.00,
  description: 'Cool guy who loves to help Dae',
  lat: 40.751352,
  lng: -73.983934
)

Sitter.create!(
  sittername: "Matthias",
  location: "315 E 105th Street, New York, NY 10029",
  rates: 85.00,
  description: 'Cool guy who loves to help Dae',
  lat: 40.789661,
  lng: -73.941932
)

Sitter.create!(
  sittername: "Al",
  location: "315 East 95th Street, New York, NY 10029",
  rates: 95.00,
  description: 'Cool guy who loves to help Dae',
  lat: 40.783250,
  lng: -73.946484,
)

User.create!(
  username: 'dae',
  password: 'daedae',
  email: 'dae@gmail.com',
  address: "305 E 104th Street, New York, NY 10029",
  lat: 40.789242,
  lng: -73.942804
)
