json.extract! medical, :id, :firstname, :lastname, :specialty, :dni, :phone, :firm, :department, :address, :birthday, :aptitude, :interests, :range, :district, :province, :area_id, :created_at, :updated_at
json.url medical_url(medical, format: :json)
