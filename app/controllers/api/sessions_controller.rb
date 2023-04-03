class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy, :show]
  before_action :require_logged_out, only: [:create]

  def show
    if @current_user
      render json: {user: current_user}
    else
      render json:{user: nil}
    end
  end

  def create
    if params[:username]
      credential = params[:username]
    else
      credential = params[:email]
    end
      password = params[:password]
    @user = User.find_by_credentials(credential, password)
    if @user
      login!(@user)
      render json: {user: @user}
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
