class ExamsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def save_exam
    if request.post?
      @exam = Exam.new(exam_params)
      if @exam.save
        flash[:notice] = "El exámen fue guardado correctamente."
        flash.keep(:notice)
        render js: "window.location = '/attentions'"
      else
        puts @exam.errors.messages
        render js: 'swal("Alerta", "Verificar todos los datos.", "warning");'
      end
    elsif request.patch?
      @exam = Exam.find(params[:exam][:exam_id])
      if @exam.update(exam_params)
        flash[:notice] = "Exámen actualizado correctamente."
        flash.keep(:notice)
        path = '/attention/' + @exam.attention.id.to_s + '/exams'
        render js: "window.location = '"+ path +"'"
      else
        puts @exam.errors.messages
        render js: 'swal("Alerta", "Verificar todos los datos.", "warning");'
      end
    end
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

  def exam_params
    params.require(:exam).permit(:type_exam_id, :attention_id, :result, :data => {})
  end

  def exam_params
    params.permit(:id, :attention_id)
  end
end
