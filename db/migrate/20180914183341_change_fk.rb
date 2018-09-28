class ChangeFk < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :occupational_histories, column: :employee_id
    add_foreign_key :occupational_histories, :employees, on_delete: :cascade
  end
end
