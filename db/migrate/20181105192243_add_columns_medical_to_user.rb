class AddColumnsMedicalToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :speciality, :string
    add_reference :users, :area
  end
end
