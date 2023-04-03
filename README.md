# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

await fetch('api/session', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({username: 'Demoman', password: 'password'})}).then(res=>res.json())