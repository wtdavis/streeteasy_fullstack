require 'net/http'

uri = URI(`https://maps.googleapis.com/maps/api/place/textsearch/json?&query=dallas%20tx&key=AIzaSyCbfcmLshxFtAp5XPvq1oq3dJlqu8p6Yug`)
res = Net::HTTP.get(uri)
print(res)