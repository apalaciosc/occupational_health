class ChangeLocationForRuc < ActiveRecord::Migration[5.2]
  def change
    rename_column :enterprises, :location, :ruc
  end
end
