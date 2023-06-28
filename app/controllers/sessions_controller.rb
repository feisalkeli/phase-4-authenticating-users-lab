class SessionsController < ApplicationController
  def create
    user = User.find_by(id: params[:id])
    if user
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "User not found" }
    end
  end

  def destroy
    session.delete(:user_id)
    head :no_content
  end
end
