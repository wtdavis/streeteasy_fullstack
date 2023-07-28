class API::FavoritesController < ApplicationController
    before_action: require_logged_in

    def show
        @user = params[:user]
        @favorites = Favorite.find_by(user_id: @user.id)
        
        if @favorites
            render json: @favorites
        else
            render json: {errors: @favorites.errors.full_messages}
        end
    end 

    def create
        @user = params[:user] 
        @listing = params[:listing] 
        @favorite = Favorite.new()

        @favorite.user_id = @user.id
        @favorite.listing_id = @listing.id

        if @favorite.save!
            render json: @favorite
        else
            render json: {errors: @favorite.errors.full_messages}
        end

    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy!
    end


end