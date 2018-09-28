class CreateExams < ActiveRecord::Migration[5.2]
  def change
    create_table :exams do |t|
      t.references :type_exam, foreign_key: true
      t.references :attention, foreign_key: true
      t.text :data
      t.text :result

      t.timestamps
    end
  end
end
