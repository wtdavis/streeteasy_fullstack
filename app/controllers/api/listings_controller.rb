class Api::ListingsController < ApplicationController
  wrap_parameters include: Listing.attribute_names + [:photo]

  def index
    # @listings = Listing.find_by(params[:filter])
    @listings = Listing.all
    render 'api/listings/index'
  end

  def show
    @listing = Listing.find(params[:id])
    # puts params
    render 'api/listings/show'
  end

  def create
    debugger
    @listing = Listing.new(listing_params)
    
    if @listing.save!
      render 'api/listings/show'
    else
      errors = @listing.errors.messages
      
      render json: {errors: errors}
      return nil
    end
  end

  def update
    @listing = Listing.find(params[:id])
    @listing.update!(listing_params)
    
    render 'api/listings/show'
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy!
  end


  def search 
    @listings = Listing.where("lower(description) LIKE ?", "%#{params[:q]}%")
    render :search
  end
  private

  def listing_params
    
    params.require(:listing).permit(
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
                                    :unit,
                                    :photo
                                    )
  end


end
