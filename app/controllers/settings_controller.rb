class SettingsController < ApplicationController
  before_action :setting, only: [:config_settings, :save_settings, :data_license]

  def config_settings
    redirect_to root_path unless verify_is_admin
  end

  def save_settings
    redirect_to root_path unless verify_is_admin
    if @setting.update(params[:setting].permit!)
      flash[:notice] = "Configuración actualizada correctamente."
      flash.keep(:notice)
      redirect_to config_settings_path
    end
  end

  def data_license
    respond_to do |format|
      format.json {render json: {license_expiration: @setting.license_expiration, role_user: current_user.role_id} }
    end
  end

  protected
  def verify_is_admin
    return true if user_signed_in? && (current_user.superadmin? || current_user.admin?)
    return false
  end
  def setting
    @setting = Setting.first || Setting.new
  end
end
