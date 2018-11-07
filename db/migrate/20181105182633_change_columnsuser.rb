class ChangeColumnsuser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :type_user
    add_column :users, :first_change_password, :boolean
  end
end
