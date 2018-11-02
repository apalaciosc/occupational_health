class FixColumnsMedical < ActiveRecord::Migration[5.2]
  def change
    remove_column :medicals, :firstname
    remove_column :medicals, :lastname
    remove_column :medicals, :dni
    remove_column :medicals, :phone
    remove_column :medicals, :department
    remove_column :medicals, :address
    remove_column :medicals, :birthday
    remove_column :medicals, :aptitude
    remove_column :medicals, :interests
    remove_column :medicals, :range
    remove_column :medicals, :district
    remove_column :medicals, :province
    remove_column :medicals, :numb_depart_int
    remove_column :medicals, :urbanization
    remove_column :medicals, :civil_status
    remove_column :medicals, :email
    remove_column :medicals, :sex
    remove_column :medicals, :way
    remove_column :medicals, :degree_instruction
  end
end
