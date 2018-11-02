class UsersController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def edit_profile
    @user = current_user
  end

  def update_profile
    @user = User.find(current_user.id)
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to root_path, notice: 'Perfil actualizado correctamente.' }
      else
        format.html { render :edit_profile }
      end
    end
  end

  def index
    @search = params[:search]
    if @search
      @users = User.paginate(page:params[:page],per_page:7).where("name ILIKE ?", "%#{@search}%")
    else
      @users = User.paginate(page:params[:page],per_page:7).all
    end
  end

  private

  def user_params
    params.required(:user).permit(:email, :dni, :name, :lastname, :avatar, :phone, :position, :department, :address, :birthday, :aptitude, :interests)
  end
end
