class CreateAttentions < ActiveRecord::Migration[5.2]
  def change
    create_table :attentions do |t|
      t.references :employee, foreign_key: true
      t.string :nro_hc
      t.integer :type
      t.string :department
      t.string :province
      t.string :district
      t.text :general
      t.text :physical
      t.text :psychological
      t.text :radiology
      t.text :x_ray_oit
      t.text :pathological_findings
      t.text :audiometry
      t.text :spirometry
      t.text :ophthalmological
      t.text :electrocardiogram
      t.text :epworth_test
      t.text :structural_height_test
      t.text :stress_test
      t.text :personality_test
      t.text :odontogram
      t.text :occupational_medical_diagnosis
      t.text :other_diagnoses
      t.text :recommendations

      t.timestamps
    end
  end
end
