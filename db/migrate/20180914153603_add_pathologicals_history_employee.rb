class AddPathologicalsHistoryEmployee < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :pathologicals_history, :text
  end
end
