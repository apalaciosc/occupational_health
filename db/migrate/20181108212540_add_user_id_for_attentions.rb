class AddUserIdForAttentions < ActiveRecord::Migration[5.2]
  def change
    add_reference :attentions, :user
    add_reference :exams, :user
    remove_column :users, :medical_id
  end
end
