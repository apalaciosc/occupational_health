class AddViewForExams < ActiveRecord::Migration[5.2]
  def change
    add_column :type_exams, :view, :string
  end
end
