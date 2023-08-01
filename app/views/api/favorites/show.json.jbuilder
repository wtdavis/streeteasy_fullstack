json.set! @favorite.listing_id do 
    json.extract! @favorite, 
                    :user_id,
                    :listing_id,
                    :id,
                    :listing
end