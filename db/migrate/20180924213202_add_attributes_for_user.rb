class AddAttributesForUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role_id, :integer
    add_column :users, :dni, :string
    add_column :users, :name, :string
    add_column :users, :lastname, :string
    add_column :users, :photo, :string
    add_attachment :users, :avatar
    add_column :users, :position, :string
    add_column :users, :department, :string
    add_column :users, :address, :string
    add_column :users, :birthday, :date
    add_column :users, :aptitude, :text
    add_column :users, :interests, :text
  end
end
