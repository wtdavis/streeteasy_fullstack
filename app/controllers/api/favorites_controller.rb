class Api::FavoritesController < ApplicationController

    def show
        # debugger
        if current_user
            @user = current_user
            @favorites = Favorite.where("user_id = ?", @user.id)
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