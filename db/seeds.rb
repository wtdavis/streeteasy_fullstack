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
end