class EnterprisesController < ApplicationController
  before_action :set_enterprise, only: [:update, :destroy]
  before_action :authenticate_user!

  # GET /enterprises
  # GET /enterprises.json
  def index
    @search = params[:search]
    @enterprise = Enterprise.new
    if @search
      @enterprises = Enterprise.paginate(page:params[:page],per_page:7).where("name||ruc ILIKE ?", "%#{@search}%") if params[:page] != 'pdf'
      @enterprises = Enterprise.where("name||ruc ILIKE ?", "%#{@search}%") if params[:page] == 'pdf'
    else
      @enterprises = Enterprise.paginate(page:params[:page],per_page:7).all if params[:page] != 'pdf'
      @enterprises = Enterprise.all if params[:page] == 'pdf'
    end
    respond_to do |format|
      format.html
      format.json
      format.pdf {render template: 'enterprises/reporte', pdf: 'reporte', layout: 'pdf.html'}
    end
  end

  # POST /enterprises
  # POST /enterprises.json
  def create
    @enterprise = Enterprise.new(enterprise_params)
    if @enterprise.save
      flash[:notice] = "La empresa fue creada correctamente."
      flash.keep(:notice)
      render js: "window.location = '/enterprises'"
    else
      render js: 'swal("Alerta", "Verificar todos los datos.", "warning");'
    end
  end

  # PATCH/PUT /enterprises/1
  # PATCH/PUT /enterprises/1.json
  def update
    if @enterprise.update(enterprise_params)
      flash[:notice] = "La empresa fue actualizada correctamente."
      flash.keep(:notice)
      render js: "window.location = '/enterprises'"
    else
      render js: 'swal("Alerta", "Debe completar todos los datos.", "warning");'
    end
  end

  # DELETE /enterprises/1
  # DELETE /enterprises/1.json
  def destroy
    @enterprise.destroy
    respond_to do |format|
      format.html { redirect_to enterprises_url, notice: 'La empresa fue eliminada correctamente.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_enterprise
    @enterprise = Enterprise.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def enterprise_params
    params.require(:enterprise).permit(:ruc, :name, :economic_activity, :workplace, :departament,:province, :district)
  end
end
