require './main/web/routes.rb'

configure do
	set :views, Proc.new { File.join(root, "views") }
	set :public_folder, File.dirname(__FILE__) + 'views'
end