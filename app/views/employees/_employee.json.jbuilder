json.extract! employee, :id, :enterprise_id, :name, :birthday, :age, :dni, :address, :way, :numb_depart_int, :urbanization, :district, :province, :department, :resi_in_place_work, :time_place_work, :essalud, :eps, :sctr, :other, :email, :civil_status, :degree_instruction, :number_children, :number_dependents, :created_at, :updated_at
json.url employee_url(employee, format: :json)
