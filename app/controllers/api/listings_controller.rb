class Api::ListingsController < ApplicationController
  wrap_parameters include: Listing.attribute_names + [:photos]

  def index
    # @listings = Listing.find_by(params[:filter])
    @listings = Listing.all
    render 'api/listings/index'
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    render 'api/listings/show'
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save!
      render 'api/listings/show'
    else
      errors = @listing.errors.full_messages
      render json: {errors: errors}
      return nil
    end
  end

  def destroy

  end

  private

  def listing_params
    params.require(:listing).permit(
                                    :location, 
                                    :address, 
                                    :description, 
                                    :list_id, :price, 
                                    :num_bedrooms, 
                                    :num_baths, 
                                    :borough, 
                                    :rental,
                                    :building_id, 
                                    :unit
                                    )
  end


end
