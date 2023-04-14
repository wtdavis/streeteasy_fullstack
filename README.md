## EliteEasy: a fullstack StreetEasy.com clone

### Introduction
This project aims to faithfully re-create the StreetEasy site, made for searching and advertising property to rent or sell in New York City. StreetEasy has approachable styling and functionality; I chose to clone it to expand my skills while maintaining achievable goals, and because, having used the site and enjoyed my experience, I wanted to learn more about how to create something useable but simple. This project is ongoing, requiring more features and involving more technologies in the near future. Technologies involved in this project include:
 - Languages: HTML/CSS, Ruby, Javascript
 - Frontend: React/Redux
 - Backend: Ruby on Rails
 - Database: PostgresQL
 - Hosting: Render
 - Services: AWS cloud storage

### User Profile
The user profile of StreetEasy is designed to capture user preferences for property searches. This is mostly to proactively advertise new properties; because this advertising feature will not be part of my website, my user profiles remain minimal. I did, however, maintain the option to create new property listings through the user profile, while making the styling more approachable, and trimming information not relevant to my implementation:

- 
- 

### Listing Index
Browsing a variety of listings in one place creates a design challenge- an index of listings must balance displaying as many listing tiles and as much information about each as possible, while making each listing large enough to be readable, and while avoiding clutter and crowding. StreetEasy's approach is to listing tiles side-by-side, with a sidebar of additional information. I recreated this effect, including as a thumbnail the listing's attached photo:

- 
- 

### Listing Show
Clicking on a listing tile takes the user to the listing's show page, where its image is expanded, and more information about the listing is displayed. Future functionality will include mutliple photos, photo scrolling, and additional listing details:

- 
- 
