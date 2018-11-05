class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  include CanCan::ControllerAdditions

  rescue_from CanCan::AccessDenied do
    redirect_to "/404"
  end

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :dni, :name, :lastname, :avatar, :phone, :position, :department, :address, :birthday, :aptitude, :interests, :role_id) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :dni, :name, :lastname, :avatar, :phone, :position, :department, :address, :birthday, :aptitude, :interests, :role_id) }
  end
end
