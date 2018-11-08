class AddImageToSetting < ActiveRecord::Migration[5.2]
  def change
    add_attachment :settings, :avatar_clinic
  end
end
