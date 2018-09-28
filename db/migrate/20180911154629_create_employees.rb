class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.references :enterprise, foreign_key: true
      t.string :name
      t.date :birthday
      t.integer :age
      t.string :dni
      t.string :address
      t.integer :way
      t.integer :numb_depart_int
      t.string :urbanization
      t.string :district
      t.string :province
      t.string :department
      t.boolean :resi_in_place_work
      t.integer :time_place_work
      t.boolean :essalud
      t.boolean :eps
      t.boolean :sctr
      t.boolean :other
      t.string :email
      t.integer :civil_status
      t.string :degree_instruction
      t.integer :number_children
      t.integer :number_dependents

      t.timestamps
    end
  end
end
