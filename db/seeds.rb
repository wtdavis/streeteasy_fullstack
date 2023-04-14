# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts 'Destroying Tables'

    User.destroy_all

    puts 'Resetting Primary Keys'

    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts 'Creating Users...'

    
    User.create!([
        {email: "demo@demo.com",
        password: "password"},
    {
        email: "monster@monster.com",
        password: "password"
        },
        {
        email: "john@johnson.com",
        password: "password"
    },

    ])

    Building.destroy_all

    ApplicationRecord.connection.reset_pk_sequence!('buildings')

    Building.create!([{
        location: "70.004, -101.33",
        address: "1 Street st, Manahattan, NY 10000",
        name: "The Regency",
        description: "Gold walls, gold toilets, gold everything. Doorman is a pile of money."
    },
    {
        location: "71.440, -100.3",
        address: "500 Park Avenue, Manhattan, NY 10021",
        name: "The Royale",
        description: "100 stories of pure capitalist greed."
    },
    {
        location: "81.01, -99.99",
        address: "420 Baker st, Bronx, NY 14201",
        name: "Baker's Tower",
        description: "Its always 420 somewhere."
    },
    {
        location: "80.0101, -75.01",
        address: "71 President st, Brooklyn, NY 11215",
        name: "The Reinhardt",
        description: "A luxury home for people who hate Manhattan."
    },
    {
        location: "81.8181, -81.8181",
        address: "11 Prospect place, Brooklyn, NY 11111",
        name: "The Building building",
        description: "This is technically a building."
    },
    {
        location: "75.0, -75.0",
        address: "99 Ocean Parkway, Queens NY 14223",
        name: "The Average",
        description: "A place to live when you are a person."
    },
    {
        location: "75.0, -100.0",
        address: "19 Avenue D, Manhattan, NY 10101",
        name: "The Residences",
        description: "four walls and a roof."
    }
    ])
    # 10.times do 
    #     User.create!({
    #         email: Faker::Internet.unique.email,
    #         password: 'password'
    #     })
    # end

    puts "done"

    Listing.destroy_all
    puts "listings destroyed, creating..."

    ApplicationRecord.connection.reset_pk_sequence!('listings')

    Listing.create!([{
        location: "70.0055, -101.112",
        address: "451 Caton Avenue",
        description: "With over 400 dogs-in-residence, this apartment is crowded but cozy. Boasts wall-to-wall shag carpet and views of the international space station. Perfect for any young billionaire's first second apartment",
        lister_id: 1,
        building_id: 1,
        unit: "4D",
        rental: :true,
        price: 10000,
        num_bedrooms: 1,
        num_baths: 1,
        borough: "Brooklyn"

    },
    {
        location: "70.0055, -101.112",
        address: "9001 St Monet Lane",
        unit: "41R",
        description: "An experimental design by renowned architect Mnier Roiuaru, this apartment has no floor, and boasts a stunning amount of ghosts. Solid gold toilets compliment this historic luxury home.",
        lister_id: 1,
        building_id: 1,
        rental: :true,
        price: 10000,
        num_bedrooms: 1,
        num_baths: 1,
        borough: "Brooklyn"

    },
    {
        location: "75.0055, -104.112",
        address: "101 Park Avenue",
        description: "A home that has borne historical figures such as Napolean Bonaparte, Abraham Lincoln, and Henry Kissinger, this billionaire playboy philanthropist style loft will have people saying, wow that person sucks.",
        lister_id: 1,
        building_id: 2,
        rental: true,
        unit: "1A",
        price: 10000000000000000,
        num_bedrooms: 45,
        num_baths: 1,
        borough: "Manhattan"

    },
    {
        location: "70.0055, -101.112",
        address: "43 decatur st",
        description: "A literal closet, full of old dust and bones. You still can't afford it, peasant!",
        lister_id: 2,
        building_id: 2,
        unit: "0B",
        rental: false,
        price: 90000000,
        num_bedrooms: 1,
        num_baths: 1,
        borough: "Manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "10 Billionaire Avenue",
        description: "This is a clown car filled with creepy old marionettes. You won't get a wink of sleep! Just listed, so act fast!",
        lister_id: 2,
        building_id: 2,
        unit: "404",
        rental: false,
        price: 257000000,
        num_bedrooms: 3,
        num_baths: 4,
        borough: "Manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "3 Pearly Gates pl",
        description: "This luxury flat may just be heaven on Earth. Oh snap this is actually heaven, heaven is real, hnnnnnngggg",
        lister_id: 2,
        building_id: 2,
        unit: "100000",
        rental: true,
        price: 25679000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "Manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "Central Park",
        description: "This is literally just central park. Its for sale! Say goodbye to plebians, and hello to your little slice of depriving the public of essential resources.",
        lister_id: 3,
        building_id: 2,
        unit: "1",
        rental: false,
        price: 999999999999995,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "Manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "99 Rector st",
        description: "Ever wanted to live in a motor-oil reclamation system? Well, now you have no choice! This 55 gallon oil drum is home to several rats, but can be yours for only the listed price and both of your kidneys.",
        lister_id: 3,
        building_id: 2,
        unit: "101",
        rental: true,
        price: 5555555,
        num_bedrooms: 0,
        num_baths: 0,
        borough: "Bronx"
    },
    {
        location: "70.0055, -101.112",
        address: "21 West Upper West Side West",
        description: "Its the Wild Wild West Side, birthplace of democracy, breeding ground of unfettered capitalism. Enjoy scenic views of other, taller buildings from this hideously expensive hovel.",
        lister_id: 3,
        building_id: 2,
        unit: "99Z",
        rental: true,
        price: 21500000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "Manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "501 Browning St",
        description: "Voted best seat in the city, this luxury public bathroom can be yours at a low cost thanks to the slow decline of the economy.",
        lister_id: 3,
        building_id: 2,
        unit: "0Q",
        rental: true,
        price: 420690,
        num_bedrooms: 1,
        num_baths: 100,
        borough: "Staten Island"
    }
    
    
    ])

    puts "created listings!"
    puts "done"
end