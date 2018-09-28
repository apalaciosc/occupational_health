class CreateTypeExams < ActiveRecord::Migration[5.2]
  def change
    create_table :type_exams do |t|
      t.references :area, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
