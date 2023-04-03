class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  def show
    if @current_user
      render json: {user: current_user}
    else
      render json:{user: nil}
    end
  end

  def create
    credential = user_params[:username] || user_params[:email]
    password = user_params[:password]
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
      @current_user.logout!
      render json: {message: 'success'}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
