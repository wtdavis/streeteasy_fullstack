
json.extract! listing,
                :id, 
                :location,
                :address, 
                :description,
                :lister_id, 
                :price, 
                :num_bedrooms,
                :num_baths, 
                :borough, 
                :rental,
                :building_id,
                :unit

if listing.photo.attached?
    json.photo_url listing.photo.url 
else
    json.photo_url 'frontend/src/assets/thisphoto.png'
end
                  