class StudentsController < ApiController
  def index
    students = Student.all
    respond_with students
  end
end
