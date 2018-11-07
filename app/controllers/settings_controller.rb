class SettingsController < ApplicationController
  before_action :setting, only: [:config_settings, :save_settings]

  def config_settings
  end

  def save_settings
    if @setting.update(params[:setting].permit!)
      flash[:notice] = "Configuración actualizada correctamente."
      flash.keep(:notice)
      redirect_to config_settings_path
    end
  end

  protected
  def setting
    @setting = Setting.first || Setting.new
  end
end
