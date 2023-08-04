json.set! @favorite.listing_id do 

    json.extract! @favorite, 
                    :user_id,
                    :listing_id,
                    :id
        json.listing do
             json.partial! 'api/listings/listing', listing: @favorite.listing
        end
    
        
end