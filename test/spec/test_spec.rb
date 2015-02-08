require_relative 'spec_helper'

describe 'Creating an event do' do 
	it 'gets the Create Event Page' do 
		visit '/'
		click_on 'Create Event'
		expect(page).to have_content("Create Event")
	end
end