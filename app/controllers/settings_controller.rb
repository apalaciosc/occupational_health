class SettingsController < ApplicationController
  before_action :setting, only: [:settings, :save_settings]

  def config_settings
  end

  def save_settings
    @setting.update(params[:setting].permit!)
    redirect_to config_settings_path
  end

  protected
  def setting
    @setting = Setting.first || Setting.new
  end
end
