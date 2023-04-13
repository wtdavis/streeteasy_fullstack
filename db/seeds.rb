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

    User.create!(
        email: "demo@demo.com",
        password: "password"
    )

    User.create!([
    {
        email: "monster@monster.com",
        password: "password"
        },
        {
        email: "john@johnson.com",
        password: "password"
    },
    {
        email: "theaterl0ver@president.com",
        password: "password"
    },
    {
        email: "didntdie@stillalive.com",
        password: "password"
    },
    {
        email: "memelord@thelegend.com",
        password: "password"
    },
    {
        email: "trickledown@terrible.com",
        password: "password"
    },
    {
        email: "human@email.com",
        password: "password"
    },
    {
        email: "lawntrimmings@autumn.com",
        password: "password"
    },
    {
        email: "sweetdreams@goodnight.com",
        password: "password"
    },
    {
        email: "jetersucks@boston.com",
        password: "password"
    },
    {
        email: "attorney@law.com",
        password: "password"
    }
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
        address: "43 decatur str",
        description: "With over 400 dogs-in-residence, this apartment is crowded but cozy. Boasts wall-to-wall shag carpet and views of the international space station. Perfect for any young billionaire's first second apartment",
        lister_id: 1,
        building_id: 1,
        unit: "4d",
        rental: :true,
        price: 10000,
        num_bedrooms: 1,
        num_baths: 1,
        borough: "Brooklyn"

    },
    {
        location: "70.0055, -101.112",
        address: "400 Mercer st",
        unit: "41z",
        description: "An experimental design by renowned architect Mnier Roiuaru, this apartment is ",
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
        description: "A cardboard box full of dust and bones",
        lister_id: 2,
        building_id: 2,
        rental: true,
        unit: "1a",
        price: 100000,
        num_bedrooms: 45,
        num_baths: 1,
        borough: "manhattan"

    },
    {
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        description: "A literal closet",
        lister_id: 2,
        building_id: 2,
        unit: "0B",
        rental: false,
        price: 20000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        description: "A literal closet",
        lister_id: 2,
        building_id: 2,
        unit: "0B",
        rental: false,
        price: 20000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        description: "A literal closet",
        lister_id: 2,
        building_id: 2,
        unit: "0B",
        rental: false,
        price: 20000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "manhattan"
    },
    {
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        description: "A literal closet",
        lister_id: 2,
        building_id: 2,
        unit: "0B",
        rental: false,
        price: 20000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "manhattan"
    }
    ])

    puts "created listings!"
    puts "done"
end