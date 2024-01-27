class Api::PlacesController < ApplicationController
    require 'net/http'
    def show 
        @query_string = JSON.parse(params[:query]) 
        
        @query = @query_string["query"]
        @fields = @query_string["fields"]
        @key = @query_string["key"]
        @final_string = ""
        @final_string.concat(CGI.escape(@query)).concat(CGI.escape(@fields)).concat(CGI.escape(@key))
        
        query_string = URI(`https://maps.googleapis.com/maps/api/place/textsearch/json?&query=#{@query["query"]}&fields=#{}&key=#{@query["key"]}`)
        Net::HTTP.get(query_string)
        debugger
    end

end