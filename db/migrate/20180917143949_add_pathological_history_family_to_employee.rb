class AddPathologicalHistoryFamilyToEmployee < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :pathologicals_history_family, :text
  end
end
