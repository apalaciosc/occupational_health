class ChangeColumnWay < ActiveRecord::Migration[5.2]
  def up
    change_table :employees do |t|
      t.change :way, :string
    end
  end

  def down
    change_table :employees do |t|
      t.change :way, :integer
    end
  end
end
