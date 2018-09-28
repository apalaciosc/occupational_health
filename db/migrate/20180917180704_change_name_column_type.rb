class ChangeNameColumnType < ActiveRecord::Migration[5.2]
  def change
    rename_column :attentions, :type, :type_attention
  end
end
