class Api::V1::StudentsController < ApiController
  before_action :find_student, only: [:show, :update, :destroy]

  def index
    students = Student.all
    respond_with students
  end

  def show
    respond_with @student
  end

  def create
    student = Student.new(student_params)
    student.save
    respond_with student
  end

  def update
    @student.update_attributes(student_params)
    @student.save
    respond_with @student
  end

  def destroy
    @student.destroy
    respond_with @student
  end

  private

  def student_params
    params.require(:student).permit!
  end

  def find_student
    @student = Student.find(params[:id])
  end
end
