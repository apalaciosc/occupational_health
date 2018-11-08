class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.string :name_clinic
      t.date :license_expiration

      t.timestamps
    end
  end
end
