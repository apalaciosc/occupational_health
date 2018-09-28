class CreateAbsenteeisms < ActiveRecord::Migration[5.2]
  def change
    create_table :absenteeisms do |t|
      t.references :employee, foreign_key: true
      t.string :illness_accident
      t.integer :associated_with_work
      t.string :year
      t.integer :days_off

      t.timestamps
    end
  end
end
