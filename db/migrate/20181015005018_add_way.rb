class AddWay < ActiveRecord::Migration[5.2]
  def change
    add_column :medicals, :way, :string
  end
end
