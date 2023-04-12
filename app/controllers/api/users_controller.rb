class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)

    # debugger
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

  def find
    @user = User.find_by(credential: params[:credential])
    if @user
      render json: [user: @user]
    else
      render json: ["No"], status: "404"
    end
    return nil
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
  end
private

  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end
