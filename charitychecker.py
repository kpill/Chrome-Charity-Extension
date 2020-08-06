import requests
import json


app_id = "182dd05a"
app_key = "af09573c3fec842aad8a44d18ad57e4d"
search = input("Enter charity name: ") 
#search = json.loads(JSONtitle)  ##JSONtitle is from the jquery.js file. is this allowed?
searchType = "NAME_ONLY"
url = "https://api.data.charitynavigator.org/v2/Organizations?" + "app_id=" + app_id + "&app_key=" + app_key + "&search=" + search + "&searchType" + searchType

response = requests.get(url) ##requests from the url
print("code {}\n".format(response.status_code)) #gives you the status code of the api
response_json = response.json() #the json response from the url
json_string = json.dumps(response_json) #stores json as a native python str
data = json.loads(json_string) #deserializes str of JSON (aka turns the json object to a python dict)
sequence = range(len(data))
for i in sequence:
	print(data[i]['charityName'])
	print(data[i]['tagLine'])
	print(data[i]['mission'])
	#print(data[i]['score'])
	#print(data[i]['irsClassification'])




