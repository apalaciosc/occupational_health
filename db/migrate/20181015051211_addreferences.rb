class Addreferences < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :medical
  end
end
