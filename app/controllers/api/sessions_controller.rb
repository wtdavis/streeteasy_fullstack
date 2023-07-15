class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  before_action :require_logged_out, only: [:create]

  def show
    if @current_user
      render 'api/users/show'
    else
      render json:{user: nil}
      return nil
    end
  end

  def create
    # if params[:username]
    #   credential = params[:username]
    # elsif params[:email]
    #   credential = params[:email]
    # elsif params[:credential]
    #   credential = params[:credential]
    # end
      credential = params[:credential]
      password = params[:password]
    @user = User.find_by_credentials(credential, password)
    if @user
      login!(@user) 
      render 'api/users/show'
    else
      render json: {errors: ['Invalid Credentials']}, status: :unauthorized
    end
  end

  def destroy
    if @current_user
      logout!
      render json: {message: 'success'}
    end
  end


  

end
