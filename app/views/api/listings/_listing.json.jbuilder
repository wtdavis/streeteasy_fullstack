
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
    json.photo_url 'https://photos.zillowstatic.com/fp/b3e4b53140327158749bcc621824b660-se_large_800_400.webp'
end
                  