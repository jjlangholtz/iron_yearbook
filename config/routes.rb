Rails.application.routes.draw do
  devise_for :students
  root 'home#index'
end
