class AddSex < ActiveRecord::Migration[5.2]
  def change
    add_column :medicals, :sex, :integer
  end
end
