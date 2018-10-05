class Employee < ApplicationRecord
  belongs_to :enterprise
  enum civil_status: [:soltero, :casado, :viudo, :divorciado]
  enum sex: [:masculino, :femenino]
  has_many  :occupational_histories
  has_many  :absenteeisms
  has_many  :attentions
  accepts_nested_attributes_for :occupational_histories, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :absenteeisms, reject_if: :all_blank, allow_destroy: true
  serialize :pathologicals_history, Hash
  serialize :pathologicals_history_family, Hash

  def add_pathologicals_history(allergy,diabetes,tbc,hepatitisb,asthma,hta,its,typhoid,bronchitis,neoplasia,convulsion,others,burn,surgeries,poisoning,alcohol_type,alcohol_quantity,alcohol_frequency,tobacco_type,tobacco_quantity,tobacco_frequency,drug_type,drug_quantity,drug_frequency,medicine_type,medicine_quantity,medicine_frequency)
    ph = {
      allergy: allergy,
      diabetes: diabetes,
      tbc: tbc,
      hepatitisb: hepatitisb,
      asthma: asthma,
      hta: hta,
      its: its,
      typhoid: typhoid,
      bronchitis: bronchitis,
      neoplasia: neoplasia,
      convulsion: convulsion,
      others: others,
      burn: burn,
      surgeries: surgeries,
      poisoning: poisoning,
      alcohol_type: alcohol_type,
      alcohol_quantity: alcohol_quantity,
      alcohol_frequency: alcohol_frequency,
      tobacco_type: tobacco_type,
      tobacco_quantity: tobacco_quantity,
      tobacco_frequency: tobacco_frequency,
      drug_type: drug_type,
      drug_quantity: drug_quantity,
      drug_frequency: drug_frequency,
      medicine_type: medicine_type,
      medicine_quantity: medicine_quantity,
      medicine_frequency: medicine_frequency
    }
    self.pathologicals_history = Hash.new
    self.pathologicals_history = ph
    self.save
  end

  def add_pathologicals_history_family(father,mother,brothers,husbands,living_children,deceased_children)
    phf = {
      father: father,
      mother: mother,
      brothers: brothers,
      husbands: husbands,
      living_children: living_children,
      deceased_children: deceased_children
    }
    self.pathologicals_history_family = Hash.new
    self.pathologicals_history_family = phf
    self.save
  end
end
