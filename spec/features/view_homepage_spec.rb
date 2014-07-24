require 'rails_helper'

feature 'View the homepage' do
  scenario 'see details about the application' do
    visit '/'
    expect(page).to have_css('.welcome')
  end
end
