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
    role_id = params[:user][:role_id]
    area_id = params[:user][:area_id]
    @user.password = 'saludocupacional'
    @user.first_change_password = false
    if role_id == 'medical' && !area_id.present?
      render js: 'swal("Alerta", "Por favor seleccione el área a la que pertenecerá el médico.", "warning");'
    else
      if @user.save
        flash[:notice] = "Usuario creado correctamente con la contraseña por defecto: saludocupacional"
        flash.keep(:notice)
        render js: "window.location = '/users'"
      else
        puts @user.errors.messages
        render js: 'swal("Alerta", "Por favor verificar todos los datos.", "warning");'
      end
    end
  end

  def change_rol
    @user = User.find(params[:id])
    role_id = params[:user][:role_id]
    area_id = params[:user][:area_id]
    if role_id.present?
      if role_id == 'medical' && !area_id.present?
        render js: 'swal("Alerta", "Por favor seleccione el área a la que pertenecerá el médico.", "warning");'
      elsif role_id != 'medical' && area_id.present?
        render js: 'swal("Alerta", "Solo puede elegir un área si el rol es médico.", "warning");'
      else
        @user.role_id = role_id
        @user.area_id = area_id
        if @user.save
          flash[:notice] = "Rol actualizado correctamente."
          flash.keep(:notice)
          render js: "window.location = '/users'"
        end
      end
    else
      puts @user.errors.messages
      render js: 'swal("Alerta", "Por favor seleccione el rol.", "warning");'
    end
  end

  private

  def user_params
    params.required(:user).permit(:email, :dni, :name, :lastname, :avatar, :phone, :position, :department, :address, :birthday, :aptitude, :interests, :role_id, :area_id)
  end
end
