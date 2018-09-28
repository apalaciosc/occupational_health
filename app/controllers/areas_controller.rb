class AreasController < ApplicationController
  before_action :set_area, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /areas
  # GET /areas.json
  def index
    @search = params[:search]
    @area = Area.new
    if @search
      @areas = Area.paginate(page:params[:page],per_page:7).where("name ILIKE ?", "%#{@search}%")
    else
      @areas = Area.paginate(page:params[:page],per_page:7).all
    end
  end

  # GET /areas/new
  def new
    @area = Area.new
  end

  # GET /areas/1/edit
  def edit
  end

  # POST /areas
  # POST /areas.json
  def create
    @area = Area.new(area_params)
    if @area.save
      flash[:notice] = "Área creada correctamente."
      flash.keep(:notice)
      render js: "window.location = '/areas'"
    else
      render js: 'swal("Alerta", "Verificar todos los datos.", "warning");'
    end
  end

  # PATCH/PUT /areas/1
  # PATCH/PUT /areas/1.json
  def update
    if @area.update(area_params)
      flash[:notice] = "Área actualizada correctamente."
      flash.keep(:notice)
      render js: "window.location = '/areas'"
    else
      render js: 'swal("Alerta", "Debe completar todos los datos.", "warning");'
    end
  end

  # DELETE /areas/1
  # DELETE /areas/1.json
  def destroy
    @area.destroy
    respond_to do |format|
      format.html { redirect_to areas_url, notice: 'El área fue correctamente eliminada.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_area
      @area = Area.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def area_params
      params.require(:area).permit(:name, :description)
    end
end
