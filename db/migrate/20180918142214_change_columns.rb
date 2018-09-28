class ChangeColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :attentions, :general
    remove_column :attentions, :physical
    remove_column :attentions, :psychological
    remove_column :attentions, :radiology
    remove_column :attentions, :x_ray_oit
    remove_column :attentions, :pathological_findings
    remove_column :attentions, :audiometry
    remove_column :attentions, :spirometry
    remove_column :attentions, :ophthalmological
    remove_column :attentions, :electrocardiogram
    remove_column :attentions, :epworth_test
    remove_column :attentions, :structural_height_test
    remove_column :attentions, :stress_test
    remove_column :attentions, :personality_test
    remove_column :attentions, :odontogram
    remove_column :attentions, :occupational_medical_diagnosis
    remove_column :attentions, :other_diagnoses
    remove_column :attentions, :recommendations  
  end
end
