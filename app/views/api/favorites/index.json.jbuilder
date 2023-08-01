json.favorites({})

json.favorites do 
    @favorites.each do |favorite|
        json.set! favorite.listing_id do

            json.extract! favorite,
                            :user_id,
                            :listing_id,
                            :id
            json.listing do 
                json.partial! 'api/listings/listing', listing: favorite.listing
            end
            
        end
    end
end

                
                
                # if favorite.listing.photo.attached?
                #     json.set! :photo_url, :true
                # else
                #     json.set! :photo_url, 'https://photos.zillowstatic.com/fp/b3e4b53140327158749bcc621824b660-se_large_800_400.webp'
                # end
                
                # if favorite
                #     json.pluto_url :true
                # end
                
                
                # if favorite.listing.photo.attached?
                #     json.listing.photo_url favorite.listing.photo
                # else
                #     json.listing.photo_url 'https://photos.zillowstatic.com/fp/b3e4b53140327158749bcc621824b660-se_large_800_400.webp'
                # end
                
                # json.listing do
                #     favorite.listing do |listing|
                #         if listing.photo.attached?
                #             json.photo_url listing.photo.url
                #         else
                #             json.photo_url 'https://photos.zillowstatic.com/fp/b3e4b53140327158749bcc621824b660-se_large_800_400.webp'
                #         end
                #     end
                # end