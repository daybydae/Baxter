{
  entities: {
    sitters: {
      1: {
        id: 1,
        sittername: "",
        reviews: [],
        rates: ,
        description: ,
        img_url: ,
        verified: true,
        current_user_favorite: false,
        location: ,
      },
      2: {
        id: 1,
        sittername: "",
        reviews: [],
        rates: ,
        description: ,
        img_url: ,
        verified: true,
        current_user_favorite: false,
        location: ,
      },
      3: {
       id: 1,
       sittername: ,
       reviews: [],
       rates: ,
       description: ,
       img_url: ,
       verified: true,
       current_user_favorite: false,
       location: ,
      }
    },
    users: {
      11: {
       id: 11,
       dog_id: 1
       username: ,
       reviews: [],
       description: ,
       img_url: ,
       location: ,
       }
      },
      23: {
       id: 23,
       dog_id: 2,
       username: ,
       reviews: [],
       description: ,
       img_url: ,
       location: ,
      },
      25: {
       id: 25,
       dog_id: 3,
       username: ,
       reviews: [],
       description: ,
       img_url: ,
       location: ,
      }
    }
  },
  pets: {
      1: {
        id: 1,
        owner_id: 11,
        dogname: ,
        breed: ,
        age: ,
        sex: ,
        weight: ,
        house-trained: true,
        description: ,
        img_url: ,
        location: ,
      },
       2: {
          id: 2,
          owner_id: 11,
          dogname: ,
          breed: ,
          age: ,
          sex: ,
          weight: ,
          house-trained: true,
          description: ,
          img_url: ,
          location: ,
      },
        3: {
            id: 3,
            owner_id: 23,
            dogname: ,
            breed: ,
            age: ,
            sex: ,
            weight: ,
            house-trained: true,
            description: ,
            img_url: ,
            location: ,
        }
       },
         4: {
             id: 4,
             owner_id: 25,
             dogname: ,
             breed: ,
             age: ,
             sex: ,
             weight: ,
             house-trained: true,
             description: ,
             img_url: ,
             location: ,
         }
        }
    reviews: {
      1: {
        id: 1,
        booking_id: 2104,
        sitter_id: ,
        dog_id: ,
        user_id: ,
        description: ,
        img_url: ,
        verified: true,
        location: ,
      },
      2: {
        id: 2,
        booking_id: 11,
        sitter_id: ,
        dog_id: ,
        user_id: ,
        description: ,
        img_url: ,
        verified: true,
        location: ,
      },
      3: {
        id: 3,
        booking_id: 202,
        sitter_id: ,
        dog_id: ,
        user_id: ,
        description: ,
        img_url: ,
        verified: true,
        location: ,
      }
    },
  bookings: {
    1: {
      id: 1,
      sitter_id: ,
      dog_id: ,
      user_id: ,
      rate: ,
      dates: ,
      location: ,
    },
    2: {
      id: 1,
      sitter_id: ,
      dog_id: ,
      user_id: ,
      rate: ,
      dates: ,
      location: ,
    },
    3: {
      id: 1,
      sitter_id: ,
      dog_id: ,
      user_id: ,
      rate: ,
      dates: ,
      location: ,
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
  },
  session: {
    id: 23,
    username: ,
    reviews: [],
    description: ,
    img_url: ,
    location: ,
  }
}
