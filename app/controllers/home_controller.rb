class HomeController < ApplicationController
  before_action :authenticate_user!
  before_action :validate_data


  def index
  end

  private

  def validate_data
    if user_signed_in?
      if !current_user.first_change_password?
        flash[:notice] = "Debe cambiar su contraseña por defecto antes de continuar."
        redirect_to edit_user_registration_path
      elsif current_user.name.blank? || current_user.lastname.blank? || current_user.dni.blank?
        flash[:notice] = "Por favor completar sus datos principales (Nombre, Apellidos, DNI)."
        redirect_to edit_user_registration_path
      end
    end
  end
end
