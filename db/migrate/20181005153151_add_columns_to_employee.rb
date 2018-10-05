class AddColumnsToEmployee < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :sex, :integer
    add_column :employees, :assignment, :string
  end
end
