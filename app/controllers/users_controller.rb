class UsersController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
    @search = params[:search]
    if @search
      @users = User.paginate(page:params[:page],per_page:7).where("name ILIKE ?", "%#{@search}%")
    else
      @users = User.paginate(page:params[:page],per_page:7).all
    end
  end

  def new_user
    @user = User.new
  end

  def create_user
    @user = User.new(user_params)
    @user.password = 'saludocupacional'
    if @user.save
      flash[:notice] = "Usuario creado correctamente con la contraseña por defecto: saludocupacional"
      flash.keep(:notice)
      render js: "window.location = '/users'"
    else
      puts @user.errors.messages
      render js: 'swal("Alerta", "Por favor verificar todos los datos.", "warning");'
    end
  end

  def change_rol
    @user = User.find(params[:id])
    if params[:user][:role_id].present?
      @user.role_id = params[:user][:role_id]
      if @user.save
        flash[:notice] = "Rol actualizado correctamente."
        flash.keep(:notice)
        render js: "window.location = '/users'"
      end
    else
      puts @user.errors.messages
      render js: 'swal("Alerta", "Por favor seleccione el rol.", "warning");'
    end
  end

  private

  def user_params
    params.required(:user).permit(:email, :dni, :name, :lastname, :avatar, :phone, :position, :department, :address, :birthday, :aptitude, :interests, :role_id)
  end
end
