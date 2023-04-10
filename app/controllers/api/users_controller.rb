class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    # @user = current_user
    # debugger
    if params[:id].to_i == current_user.id
      @user = @current_user
      render 'api/users/show'
    else
      render json: ["Unauthorized"], status: :unauthorized
    end
  end

  # def show
  #   @user = User.find_by(id: params[:id])
  #   render 'api/users/show'
  # end

private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
end
