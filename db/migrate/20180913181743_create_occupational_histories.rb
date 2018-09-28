class CreateOccupationalHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :occupational_histories do |t|
      t.references :employee, foreign_key: true
      t.string :company
      t.string :work_area
      t.string :ocupation
      t.date :date_init
      t.date :date_finish
      t.string :time
      t.string :ocupational_exposure
      t.string :epp

      t.timestamps
    end
  end
end
