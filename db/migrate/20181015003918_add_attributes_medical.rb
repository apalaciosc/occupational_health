class AddAttributesMedical < ActiveRecord::Migration[5.2]
  def change
    add_column :medicals, :numb_depart_int, :integer
    add_column :medicals, :urbanization, :string
    add_column :medicals, :civil_status, :integer
    add_column :medicals, :email, :string
  end
end
