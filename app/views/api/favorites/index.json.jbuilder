json.favorites({})

json.favorites do 
    @favorites.each do |favorite|
        json.set! favorite.listing_id do
            json.extract! favorite,
                            :user_id,
                            :listing_id,
                            :id
        end
    end
end

