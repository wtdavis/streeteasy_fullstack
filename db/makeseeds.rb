def goforit()

file3 = File.open("../app/assets/interior3.webp")
listing3 = Listing.find(3)
listing3.photo.attach(io: file3, filename: "file3")

end

goforit