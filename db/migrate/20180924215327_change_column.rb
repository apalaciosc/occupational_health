class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :photo, :phone
  end
end
