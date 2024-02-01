class Api::BuildingsController < ApplicationController

    def index
        @buildings = Building.all
        render json: {buildings: @buildings}
    end
end
