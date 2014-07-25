class HomeController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@students = Student.all)
  end
end
