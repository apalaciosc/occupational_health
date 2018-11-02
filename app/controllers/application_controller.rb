class ApplicationController < ActionController::Base
  include CanCan::ControllerAdditions

  rescue_from CanCan::AccessDenied do
    redirect_to "/404"
  end
end
