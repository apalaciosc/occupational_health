class SettingsController < ApplicationController
  before_action :setting, only: [:config_settings, :save_settings, :data_license]

  def config_settings
  end

  def save_settings
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
  def setting
    @setting = Setting.first || Setting.new
  end
end
