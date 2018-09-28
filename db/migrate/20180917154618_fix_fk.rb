class FixFk < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :occupational_histories, column: :employee_id
    add_foreign_key :occupational_histories, :employees
  end
end
