class AddTypeUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :type_user, :string
  end
end
