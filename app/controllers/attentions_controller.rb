class AttentionsController < ApplicationController
  before_action :set_attention, only: [:show, :edit, :update, :destroy, :update_general, :new_exams, :exams]
  before_action :set_exam, only: [:new_exams, :edit_exams]
  before_action :authenticate_user!
  load_and_authorize_resource

  # GET /attentions
  # GET /attentions.json
  def index
    @attentions = Attention.all
    @type_exams = TypeExam.all
    @search = params[:search]
    if @search
      @attentions = Attention.paginate(page:params[:page],per_page:7).where("nro_hc ILIKE ?", "%#{@search}%")
    else
      @attentions = Attention.paginate(page:params[:page],per_page:7).all
    end
  end

  # GET /attentions/1
  # GET /attentions/1.json
  def show
  end

  # GET /attentions/new
  def new
    @attention = Attention.new
  end

  # GET /attentions/1/edit
  def edit
  end

  # POST /attentions
  # POST /attentions.json
  def create
    nro_attention = Attention.where(employee_id: params[:employee_id]).count + 1
    @attention = Attention.new(attention_params)
    @attention.employee_id = params[:employee_id]
    @attention.nro_hc = '00'+ @attention.employee.dni.to_s + nro_attention.to_s
    if @attention.save
      flash[:notice] = "Creada correctamente."
      flash.keep(:notice)
      render js: "window.location = '/attentions'"
    else
      render js: 'swal("Alerta", "Verificar todos los datos.", "warning");'
    end
  end

  # PATCH/PUT /attentions/1
  # PATCH/PUT /attentions/1.json
  def update
    respond_to do |format|
      if @attention.update(attention_params)
        format.html { redirect_to @attention, notice: 'Actualizada correctamente.' }
        format.json { render :show, status: :ok, location: @attention }
      else
        format.html { render :edit }
        format.json { render json: @attention.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /attentions/1
  # DELETE /attentions/1.json
  def destroy
    @attention.destroy
    respond_to do |format|
      format.html { redirect_to attentions_url, notice: 'Registro correctamente eliminado.' }
      format.json { head :no_content }
    end
  end

  def update_general
    if @attention.update(attention_params)
      flash[:notice] = "Actualizada correctamente."
      flash.keep(:notice)
      render js: "window.location = '/attentions'"
    else
      render js: 'swal("Alerta", "Debe completar todos los datos.", "warning");'
    end
  end

  def exams
    @exams = Exam.where(attention_id: params[:id])
  end

  def new_exams
    @edit = 0
    @exam = Exam.new
  end

  def edit_exams
    @exam = Exam.find(params[:id])
    @edit = 1
  end

  def create_pdf_exam
    @exam = Exam.find(params[:id])
    @type_exam = TypeExam.find(@exam.type_exam_id)
    respond_to do |format|
     format.html
     format.json
     format.pdf {render template:"attentions/partials_exams_pdf/_#{@type_exam.view}", pdf: 'report', layout: 'pdf.html'}
   end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_attention
    @attention = Attention.find(params[:id])
  end

  def set_exam
    @type_exam = TypeExam.find(params[:type_exam])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def attention_params
    params.require(:attention).permit(:employee_id, :nro_hc, :type_attention, :department, :province, :district, :general, :physical, :psychological, :radiology, :x_ray_oit, :pathological_findings, :audiometry, :spirometry, :ophthalmological, :electrocardiogram, :epworth_test, :structural_height_test, :stress_test, :personality_test, :odontogram, :occupational_medical_diagnosis, :other_diagnoses, :recommendations)
  end

  def exam_params
    params.permit(:id, :data)
  end
end
