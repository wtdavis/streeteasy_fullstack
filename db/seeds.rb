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
        username: "Demoman",
        email: "demo@demo.com",
        password: "password"
    )

    10.times do 
        User.create!({
            username: Faker::Internet.unique.username(specifier: 6),
            email: Faker::Internet.unique.email,
            password: 'password'
        })
    end

    puts "done"

    Listing.destroy_all
    puts "listings destroyed, creating..."

    Listing.create!([{
        id: 1,
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        description: "A nice place with 70 dogs in residence",
        lister_id: 1,
        building_id: 1,
        unit: "4d",
        rental: :true,
        price: 10000,
        num_bedrooms: 1,
        num_baths: 1,
        borough: "brooklyn"

    },
    {
        id: 2,
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        unit: "4c",
        description: "A nice place with 69  dogs in residence",
        lister_id: 1,
        building_id: 1,
        rental: :true,
        price: 10000,
        num_bedrooms: 1,
        num_baths: 1,
        borough: "brooklyn"

    },
    {
        id: 3,
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
        id: 4,
        location: "70.0055, -101.112",
        address: "43 decatur str, Brooklyn, Ny 11213",
        description: "A literal closet",
        lister_id: 2,
        building_id: 2,
        unit: "0B",
        rental: true,
        price: 20000,
        num_bedrooms: 3,
        num_baths: 1,
        borough: "manhattan"

    }
    ])

    puts "created listings!"
    puts "done"
end