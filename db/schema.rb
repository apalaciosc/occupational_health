# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_05_161342) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "absenteeisms", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "illness_accident"
    t.integer "associated_with_work"
    t.string "year"
    t.integer "days_off"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_absenteeisms_on_employee_id"
  end

  create_table "areas", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "attentions", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "nro_hc"
    t.integer "type_attention"
    t.string "department"
    t.string "province"
    t.string "district"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_attentions_on_employee_id"
  end

  create_table "employees", force: :cascade do |t|
    t.bigint "enterprise_id"
    t.string "name"
    t.date "birthday"
    t.integer "age"
    t.string "dni"
    t.string "address"
    t.string "way"
    t.integer "numb_depart_int"
    t.string "urbanization"
    t.string "district"
    t.string "province"
    t.string "department"
    t.boolean "resi_in_place_work"
    t.integer "time_place_work"
    t.boolean "essalud"
    t.boolean "eps"
    t.boolean "sctr"
    t.boolean "other"
    t.string "email"
    t.integer "civil_status"
    t.string "degree_instruction"
    t.integer "number_children"
    t.integer "number_dependents"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.text "pathologicals_history"
    t.text "pathologicals_history_family"
    t.integer "sex"
    t.string "assignment"
    t.index ["enterprise_id"], name: "index_employees_on_enterprise_id"
  end

  create_table "enterprises", force: :cascade do |t|
    t.string "name"
    t.string "economic_activity"
    t.string "workplace"
    t.string "ruc"
    t.string "departament"
    t.string "province"
    t.string "district"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exams", force: :cascade do |t|
    t.bigint "type_exam_id"
    t.bigint "attention_id"
    t.text "data"
    t.text "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attention_id"], name: "index_exams_on_attention_id"
    t.index ["type_exam_id"], name: "index_exams_on_type_exam_id"
  end

  create_table "medicals", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "specialty"
    t.string "dni"
    t.string "phone"
    t.string "department"
    t.string "address"
    t.date "birthday"
    t.string "aptitude"
    t.string "interests"
    t.string "range"
    t.string "district"
    t.string "province"
    t.bigint "area_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_id"], name: "index_medicals_on_area_id"
  end

  create_table "occupational_histories", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "company"
    t.string "work_area"
    t.string "ocupation"
    t.date "date_init"
    t.date "date_finish"
    t.string "time"
    t.string "ocupational_exposure"
    t.string "epp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_occupational_histories_on_employee_id"
  end

  create_table "type_exams", force: :cascade do |t|
    t.bigint "area_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "view"
    t.index ["area_id"], name: "index_type_exams_on_area_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "role_id"
    t.string "dni"
    t.string "name"
    t.string "lastname"
    t.string "phone"
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string "position"
    t.string "department"
    t.string "address"
    t.date "birthday"
    t.text "aptitude"
    t.text "interests"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "absenteeisms", "employees"
  add_foreign_key "attentions", "employees"
  add_foreign_key "employees", "enterprises"
  add_foreign_key "exams", "attentions"
  add_foreign_key "exams", "type_exams"
  add_foreign_key "medicals", "areas"
  add_foreign_key "occupational_histories", "employees"
  add_foreign_key "type_exams", "areas"
end
