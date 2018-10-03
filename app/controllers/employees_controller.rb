class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :edit, :update, :destroy, :roadmap, :fmo]
  before_action :authenticate_user!

  # GET /employees
  # GET /employees.json
  def index
    @search = params[:search]
    if @search
      @employees = Employee.paginate(page:params[:page],per_page:7).where("name||dni ILIKE ?", "%#{@search}%")
    else
      @employees = Employee.paginate(page:params[:page],per_page:7).all
     end
     respond_to do |format|
      format.html
      format.json
      format.pdf {render template: 'employees/report', pdf: 'report', layout: 'pdf.html'}
    end

  end

  # GET /employees/1
  # GET /employees/1.json
  def show
    @attention = Attention.new
    respond_to do |format|
      format.html
      format.json
      format.pdf {render template: 'employees/report-employee', pdf: 'report-employee', layout: 'pdf.html'}
    end

   
  end

def roadmap
   respond_to do |format|
      format.html
      format.json
      format.pdf {render template: 'employees/roadmap', pdf: 'roadmap'}
    end
  
end
def fmo
   respond_to do |format|
      format.html
      format.json
      format.pdf {render template: 'employees/fmo', pdf: 'fmo'}
    end
  
end

  # GET /employees/new
  def new
    @employee = Employee.new
  end

  # GET /employees/1/edit
  def edit
    @edit = 1
    1.times { @employee.occupational_histories.build } if @employee.occupational_histories.count == 0
    1.times { @employee.absenteeisms.build } if @employee.absenteeisms.count == 0
  end

  # POST /employees
  # POST /employees.json
  def create
    @employee = Employee.new(employee_params)
    #Para pruebas
    @employee.enterprise_id = Enterprise.last.id

    respond_to do |format|
      if @employee.save
        @employee.add_pathologicals_history("",false,false,false,false,false,false,false,false,false,false,"","","","","","","","","","","","","","","","")
        @employee.add_pathologicals_history_family("","","","","","")
        format.html { redirect_to @employee, notice: 'Empleado fue correctamente creado' }
        format.json { render :show, status: :created, location: @employee }
      else
        format.html { render :new }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /employees/1
  # PATCH/PUT /employees/1.json
  def update
    respond_to do |format|
      if @employee.update(employee_params)
        format.html { redirect_to @employee, notice: 'Employee was successfully updated.' }
        format.json { render :show, status: :ok, location: @employee }
      else
        format.html { render :edit }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end

    end
  end

  # DELETE /employees/1
  # DELETE /employees/1.json
  def destroy
    @employee.occupational_histories.each do |oh|
      oh.destroy
    end
    @employee.absenteeisms.each do |a|
      a.destroy
    end
    @employee.destroy
    respond_to do |format|
      format.html { redirect_to employees_url, notice: 'Employee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def employee_params
      params.require(:employee).permit(:enterprise_id, :name, :birthday, :age, :dni, :address, :way, :numb_depart_int, :urbanization, :district, :province, :department, :resi_in_place_work, :time_place_work, :essalud, :eps, :sctr, :other, :email, :civil_status, :degree_instruction, :number_children, :number_dependents, :phone, :pathologicals_history => {}, :pathologicals_history_family => {}, occupational_histories_attributes: [OccupationalHistory.attribute_names.map(&:to_sym).push(:_destroy)], absenteeisms_attributes: [Absenteeism.attribute_names.map(&:to_sym).push(:_destroy)])
    end
end
