class Api::UsersController < ApplicationController
  def create

    @user = User.new(user_params)

    @user.lat = 40.751378
    @user.lng = -73.983957

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :address, :lat, :lng)
  end
end
