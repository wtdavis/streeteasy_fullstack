class Api::FavoritesController < ApplicationController

    def show
        # debugger
        if current_user
            @user = current_user
            @favorites = Favorite.where("user_id = ?", @user.id).includes(:listing)
            # debugger
        else
            return  
        end
        if @favorites
            render 'api/favorites/index'
        else
            render json: {errors: @favorites.errors.full_messages}
        end
    end 

    def create
        if current_user
            # debugger
            @user = current_user 
            @listing_id = params[:listing_id] 
            @favorite = Favorite.new()
            @favorite.user_id = @user.id
            @favorite.listing_id = @listing_id
            if @favorite.save!
                # debugger
                # render json: {favorite: {**@favorite, listing: {**@favorite.listing, photoUrl: 'https://photos.zillowstatic.com/fp/b3e4b53140327158749bcc621824b660-se_large_800_400.webp'}}}
                render 'api/favorites/show'
            else
                render json: {errors: @favorite.errors.full_messages}
            end
            
        end
        return
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        if @favorite.destroy!
            render json: {message: "favorite deleted successfully"}
        else
            render json: {errors: @favorite.errors.full_messages}
        end
        return
    end

    


end