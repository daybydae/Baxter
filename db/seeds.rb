# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sitter.delete_all
User.delete_all
Booking.delete_all

maurice = Sitter.new(
  sittername: "Maurice",
  location: "107 E 105th Street, New York, NY 10029",
  rates: 100.00,
  description: "I'm a cool guy who loves to help Dae. Like really loves to help Dae, who happens to be a swell guy. I mean, who wouldn't want to help Dae?",
  lat: 40.792145,
  lng: -73.947738,
)
file = File.open("app/assets/images/maurice.jpeg")
maurice.image = file
maurice.save

david = Sitter.new(
  sittername: "David",
  location: "102 103rd Street, New York, NY 10029",
  rates: 75.00,
  description: "I'm a cool guy who loves to help Dae and walks him off cliffs on the reg.",
  lat: 40.751352,
  lng: -73.983934,
)
file = File.open("app/assets/images/david.jpeg")
david.image = file
david.save

matthias = Sitter.new(
  sittername: "Matthias",
  location: "315 E 105th Street, New York, NY 10029",
  rates: 85.00,
  description: "I'm the best. For reals doe.",
  lat: 40.789661,
  lng: -73.941932
)
file = File.open("app/assets/images/matthias.jpg")
matthias.image = file
matthias.save

al = Sitter.new(
  sittername: "Al",
  location: "315 East 95th Street, New York, NY 10029",
  rates: 95.00,
  description: "I'm out of here!!! Goodluck ya'll!",
  lat: 40.783250,
  lng: -73.946484,
)
file = File.open("app/assets/images/al.jpg")
al.image = file
al.save

kati = Sitter.new(
  sittername: "Kati",
  location: "167 Rikers Lane, New York, NY 10029",
  rates: 85.00,
  description: "I'm a cool girl who loves to help Dae not think he's a complete idiot.",
  lat: 40.759552,
  lng: -73.952109
)
file = File.open("app/assets/images/tina.jpg")
kati.image = file
kati.save

jeremiah = Sitter.new(
  sittername: "Jeremiah",
  location: "315 East Hipster Lane, Brooklyn, NY 11238",
  rates: 95.00,
  description: "I'm cool guy who loves to help Dae despite the fact I broke his brain by playing a super cruel prank on him.",
  lat: 40.679823,
  lng: -73.961797,
)
file = File.open("app/assets/images/jeremiah.jpg")
jeremiah.image = file
jeremiah.save

cody = Sitter.new(
  sittername: "Cody",
  location: "88 Main Street, Long Island, NY 11755",
  rates: 55.00,
  description: "I'm a super cool guy despite being from Long Island. I also love to help Dae.",
  lat: 40.854553,
  lng: -73.117459,
)
file = File.open("app/assets/images/cody.jpg")
cody.image = file
cody.save

luke = Sitter.new(
  sittername: "Luke",
  location: "100 Keep It Real Lane, Bay Shore, NY 11706",
  rates: 45.00,
  description: "I'm a super cool guy despite being from Long Island. I also love to help Dae.",
  lat: 40.745010,
  lng: -73.253987,
)
file = File.open("app/assets/images/luke.jpg")
luke.image = file
luke.save

abby = Sitter.new(
  sittername: "Abby",
  location: "177 Abbay Street, New York, NY 10029",
  rates: 105.00,
  description: "I'm a super cool girl who loves to help Dae. Also, I'm the other half of the 'Dream Team'.",
  lat: 40.798192,
  lng: -73.951843,
)
file = File.open("app/assets/images/abby.jpg")
abby.image = file
abby.save

matt = Sitter.new(
  sittername: "Matt",
  location: "100 Keep It Real Lane, Bay Shore, NY 11706",
  rates: 80.00,
  description: "I'm a super cool dude who loves to help Dae. Also, did you know Dae is like the coolest?",
  lat: 40.761463,
  lng: -73.931366,
)
file = File.open("app/assets/images/matt.jpg")
matt.image = file
matt.save

monica = Sitter.new(
  sittername: "Monica",
  location: "35 Treat Yo Self Ave, New York, NY 11706",
  rates: 90.00,
  description: "I'm a super cool girl who loves to help Dae. I have 2 cats named Cheebie Mochi and Papi Chulo. Yeah, you read that right.",
  lat: 40.810035,
  lng: -73.950426,
)
file = File.open("app/assets/images/monica.jpg")
monica.image = file
monica.save

chris = Sitter.new(
  sittername: "Chris",
  location: "399 MyGFMayHaveAnEelBoneInHerThroat Ave, New York, NY 11706",
  rates: 90.00,
  description: "I'm a super cool dood with a super cute frenchie.",
  lat: 40.795352,
  lng: -73.970940,
)
file = File.open("app/assets/images/chris.jpg")
chris.image = file
chris.save


dae = User.new(
  username: 'dae',
  password: 'daedae',
  email: 'dae@gmail.com',
  address: "10029",
  description: "Super cool guy with 2 super cute but crazy dogs.",
  lat: 40.789242,
  lng: -73.942804
)
file = File.open("app/assets/images/tinasleep.jpg")
dae.image = file
dae.save

alison = User.new(
  username: 'alison',
  password: 'daedae',
  email: 'alison@gmail.com',
  address: "10029",
  description: "Super cool girl with a super cute but quite large yorkie named Bougie.",
  lat: 40.789242,
  lng: -73.942804
)
file = File.open("app/assets/images/alison.jpg")
alison.image = file
alison.save

demo = User.new(
  username: 'demo',
  password: 'daedae',
  email: 'demo@gmail.com',
  address: "10029",
  description: "Super cool demo with a super cute bulldog.",
  lat: 40.789242,
  lng: -73.942804
)
file = File.open("app/assets/images/baxtertina.jpg")
demo.image = file
demo.save
