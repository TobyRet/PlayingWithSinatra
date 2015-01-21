require 'sinatra'
require 'json'
require './core/number_cruncher.rb'

get '/' do
	erb :index
end

get '/:number' do 
	content_type :json
	number = params[:number].to_i
	{ number: number, factors: number.factors, odd: number.odd?, even: number.even?, prime: number.prime? }.to_json
end