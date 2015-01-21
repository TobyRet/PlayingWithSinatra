require 'sinatra'
require 'json'
require './core/number_cruncher.rb'

configure do
	set :views, Proc.new { File.join(root, 'web/views') }
	set :public_folder, File.dirname(__FILE__) + 'main'
end

get '/' do
	erb :index
end

get '/:number' do 
	content_type :json
	number = params[:number].to_i
	{ number: number, factors: number.factors, odd: number.odd?, even: number.even?, prime: number.prime? }.to_json
end
