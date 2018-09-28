class CreateEnterprises < ActiveRecord::Migration[5.2]
  def change
    create_table :enterprises do |t|
      t.string :name
      t.string :economic_activity
      t.string :workplace
      t.string :location
      t.string :departament
      t.string :province
      t.string :district

      t.timestamps
    end
  end
end
