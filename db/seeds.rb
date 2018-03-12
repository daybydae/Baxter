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
  description: "I love dogs and have rescued six dogs. In January 2017, I rescued a foxhound from the streets of downtown Brooklyn and rescued a Cattledog this past October, (I recently lost two Australian Cattlegirls). I live near Central Park and exercise my guys every day in the park with three 30 minute walks and one 1.5 mile jog down to West 70th Street
My neighbors trust me and leave their dogs with me when they are away on the weekends, (sometimes with very short notice). I send them brief, 'dog happy' videos of their dogs twice daily while they're away. They love it and my guys love the company!
My neighborhood is very dog friendly. Additionally, my building is dog friendly. Respectful and responsible, I am always reachable. I work in finance during the day and enjoy spending time at home in the evening. I have a wonderful 12 year old son who is stays with me on occasion.",
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
  description: "I am a professional boxer, and some dogs are boxers, so it only makes sense that I get along great with dogs! I know, that was a bad joke, but I seriously love dogs more than just about anything. I didn’t join Rover for the money—I really just wanted a chance to have some canine companionship in my life.

My family got its first dog when I was 12, and over the years, more pets came into our lives. Since I grew up caring for and loving dogs, I couldn’t imagine living without one, so once I was out on my own, I got a Pit Bulll and a Doberman. Sadly, they’re not with me now. Rover gives me the chance to take care of dogs once again. I am fiercely protective of the things I love, and because I love dogs so much, I will be sure to give your dog the best care possible.

My brother and I share an apartment near Central Park. He’s as big an animal lover as I am, so your dog will get double the love when he stays with me. My location means your dog will get to spend a lot of time outside. As a professional athlete, I put in a lot of training during the week—I get lots of exercise, and so will your dog!

I have a very flexible schedule, so I can give your dog all the time, love, and attention they deserve. I look forward to hearing from you and meeting your pup. Contact me today!",
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
  description: "When dogs come over, they figure out in short order that it’s not a bad place to hang out for a while. My apartment is warm and cozy with a great view. I was born and raised in New York City and intend to stay here for the rest of my life so you can depend on my being around for a while. My background is in residential building service. I worked for many years as a doorman and concierge in luxury high-rise buildings in Manhattan, providing high level service for a demanding clientele. In addition to my primary job duties, I provided pet care services to many of the shareholders. Whether it be walking or sitting you can count on me for professional pet care. Hope to hear from you soon.",
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
  description: "I will care for your dog as my own! I work from home and make my own hours so I have the time to give your pup/kitty all the attention he/she deserves. Give me any instructions and be as picky as you want! I'm mainly doing this for fun because I love animals and want to add a little excitement to life! I'm very active and will bring your dog/cat with me everywhere I go!

About this sitter:
I live an active lifestyle and have a lot of spare time. Dog/cat sitting will add some excitement to my life. Looking forward to the next sit!

Why I love dog sitting
My whole life I've loved dogs. I've also had a dog my whole life until recently, which is why I want to dog sit!

About my yard
My terrace is 1,000 sq. ft. and it's very safe. I keep the door open so your dog is free to roam outside for fresh air whenever. I'm always outside too so your dog will have plenty of space.

My experience administering medication
Yes, if shown the proper method, it won't be a problem at all!",
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
  description: "Hi, I am 18 years old and I know I am not that old but I have had experience with dogs for about 8 years now. I started walking my two dogs at a young age and would take care of them when my parents were away. I can't wait to meet you and your dog! Dogs are always welcome in my apartment and I will make them feel like they are at home. Thanks for trusting me with your beautiful dog and I promise you will not regret having your dog stay over at my house. You also won't regret me walking your pup around the streets of New York City. Thanks Rover for this amazing opportunity. Hope everyone has a good day. :)",
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
  description: "I have been a dog lover my entire life. My beautiful dog taught me the joys of having a canine companion, and how much work is necessary to ensure a happy dog life. I understand people are busy and I want to be able to help. Most importantly, I want to give dogs the attention and interaction they need and deserve. I have dog-sat in addition to owning my own dog, and understand their requirements. I'm used to walking large dogs and medium sized dogs, and am available with two hours notice. I'm available for repeated bookings and scheduling. Let me know when you need help and I'll be happy to share my schedule with you. I can also send photo updates if you want them!",
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
  description: "Having at least one dog at home since the age of five can only make you miss your pups when you're away. My Newfoundland and her Leonberger sister are back home in Switzerland enjoying themselves whilst I am here trying to make new animal friends to hang out with.

Although I've mostly cared for dogs on the bigger end of the spectrum, my energy levels are sufficient enough to care for smaller more energetic ones as well. I am a soccer player and have bundle of energy to love your dog as if he or she was my own.

It isn't just me in our apartment as I have 3 other roommates. Your dog will have plenty of social interactions with all of us which will in turn make him a more obedient and more enjoyable soul to be around. We've all had dogs before and are prepped and ready to care for yours in the comfort of our home. All my dogs have been trained by our family using professional instructors throughout their years. I have gained hands on experience training my dogs to become incredibly obedient, caring and loving. At your request, let me know if you would like your pup to benefit from my learning and I will be sure to provide him with the attention he needs.",
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
  description: "We just moved to the neighborhood and we now have a backyard. We are still getting it in shape, as it's the winter, but we figure this is a great place to dog sit. We love dogs, have always thought about getting a second one, but since we're in a great area, with a backyard and close to Tompkins Square Park, we figure we can always dog sit.

I work from home, so I am always around. Your dog will spend time with myself and Waylon during the day and will not be left alone or caged up. We usually do one walk to the dog park everyday, but only if it's not freezing, rainy and muddy or snowing.

Nikki and I travel a lot so we know how hard it is to find someone to watch Waylon. We know trust and comfort are a big factor. Our apartment is very nice and clean and dog friendly. As I mentioned we have a back yard where the dogs can go out, and of course the park is close. We love dogs and would be more than happy to take care of your pet.",
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
  description: "I've spent my entire life loving caring for dogs. From helping my parents raise litters of puppies as a child to adopting my own canine best friend after college, I've had experience with lots of different breeds - from miniature poodles to great danes! My little guy, Chewie, (male, neutered, 16lb cockapoo) and I live on the UES on a park block and enjoy long walks near the reservoir, snuggling on the couch, and playing with his favorite toys.

I am a medical student, and at the moment much of my work and research can be done from home. Therefore, I have a fair bit of flexibility in my schedule. During times that will keep me away from my apartment more than usual, I may not be available to take care of your furry friend, as I want to be able to provide as much love and care to your pet(s) as possible while you are away.",
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
  description: "For 15 wonderful years, my family and I had an adorable Westie girl named Cricket, who was a fixture in my neighborhood. Thanks to her, I've become a fixture as well.

I work from home, which means I'll be with your dog most of the day. I live only one block from one of Manhattan's best dog runs, near 72 St in Riverside Park. Your dog will get at least three walks a day, plenty of exercise and opportunities for socialization.

Your dog's happiness, health and safety are my number one priority. He or she will receive my undivided attention. I will care for two dogs from the same owner. Day rate is per dog. Special quotes for owners with two dogs.",
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
  description: "My name is Brittney. Dogs have been my passion my entire life. Since growing up i always had multiple dogs in my house hold. That drove me to want to become a vet. I took on classes and recieved my veterinary assistant diploma. I have been babysitting dogs for about 4yrs now and all my clients are very loyal to me. I currently have a mix breed dog who loves when other dogs come over and she definitely loves to play. Each dog gets treated as my own. They take daily trips to dog parks or central park and always have a blast. I provide food bowl/water bowl toys and treats. I keep pet parents updated via email or text. Your pet wont leave unhappy.",
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
  description: "Grew up with a shepherd and have cared for small puppers, big doggos and everything in between! I live in a spacious studio near Lincoln Center, with dog runs and the Hudson River within walking distance. I aim to spend as much time as possible outside with your pooch, unless he or she is an indoor chiller. [If that's the case, we'll be watching quite a bit of crappy daytime TV.]

A sound believer in 'We don't stop playing when we get old, we get old when we stop playing' (I saw it on Instagram). When a dog stays here, he or she is a roommate, not a houseguest. We hang together, dine together, snooze together and play together. [Warning: I will probably spoil your dog like no other.]",
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
