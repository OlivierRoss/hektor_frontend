require 'sinatra'
require 'curb'
require 'json'

get '/' do
    @image = get_last_img
	erb :index
end

get '/bio' do
  erb :bio
end

get '/oeuvres' do
  erb :oeuvres
end

def get_last_img
  JSON.parse(Curl.get('https://api.hektor.ca/rest/artworks/?format=json&limit=1').body)["results"].first["full"]
end
