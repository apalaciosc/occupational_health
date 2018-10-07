class CreateMedicals < ActiveRecord::Migration[5.2]
  def change
    create_table :medicals do |t|
      t.string :firstname
      t.string :lastname
      t.string :specialty
      t.string :dni
      t.string :phone
      t.string :department
      t.string :address
      t.date :birthday
      t.string :aptitude
      t.string :interests
      t.string :range
      t.string :district
      t.string :province
      t.references :area, foreign_key: true

      t.timestamps
    end
  end
end
