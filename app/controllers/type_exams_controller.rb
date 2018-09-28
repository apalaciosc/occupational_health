class TypeExamsController < ApplicationController
  before_action :authenticate_user!

  def index
    @search = params[:search]
    if @search
      @type_exams = TypeExam.paginate(page:params[:page],per_page:10).where("name ILIKE ?", "%#{@search}%")
    else
      @type_exams = TypeExam.paginate(page:params[:page],per_page:10).all
    end
  end
end
