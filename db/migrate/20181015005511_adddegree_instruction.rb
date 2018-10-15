class AdddegreeInstruction < ActiveRecord::Migration[5.2]
  def change
    add_column :medicals, :degree_instruction, :string
  end
end
