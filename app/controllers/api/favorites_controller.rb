class Api::FavoritesController < ApplicationController

    def show
        if current_user
            @user = current_user
            @favorites = Favorite.find_by(user_id: @user.id)
        else
            return
        end
        if @favorites
            render json: {favorites: @favorites}
        else
            render json: {errors: @favorites.errors.full_messages}
        end
    end 

    def create
        if current_user
            @user = current_user 
            @listing_id = params[:listing_id] 
            @favorite = Favorite.new()
            @favorite.user_id = @user.id
            @favorite.listing_id = @listing_id
            
            if @favorite.save!
                render json: @favorite
            else
                render json: {errors: @favorite.errors.full_messages}
            end
            
        end
        return
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy!
    end

    private

    def favorites_params
    end


end