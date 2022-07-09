const api_key = "b6d7d45697a9e69d91d9759e11de8ba5";
const weather_api = "http://api.openweathermap.org/geo/1.0/direct?q=";
const location_search = $("#location_search");
const city = $(".city");
const date = $(".date");
const temp = $(".temp");
const myDate = new Date();
const wind = $(".wind");
const humidity = $(".humidity");
const uv_index = $(".uvIndex");
const date1 = $(".date1");
const date2 = $(".date2");
const date3 = $(".date3");
const date4 = $(".date4");
const date5 = $(".date5");
const temp_1 = $(".temp_1");
const temp_2 = $(".temp_2");
const temp_3 = $(".temp_3");
const temp_4 = $(".temp_4");
const temp_5 = $(".temp_5");
const wind1 = $(".wind1");
const wind2 = $(".wind2");
const wind3 = $(".wind3");
const wind4 = $(".wind4");
const wind5 = $(".wind5");
const humidity1 = $(".humidity1");
const humidity2 = $(".humidity2");
const humidity3 = $(".humidity3");
const humidity4 = $(".humidity4");
const humidity5 = $(".humidity5");
const conditions = $(".conditions");
var d = new Date();
let today_date = d.toDateString();
var currDate1 = new Date();
var currDate2 = new Date();
var currDate3 = new Date();
var currDate4 = new Date();
var currDate5 = new Date();
var date_list = [currDate1, currDate2, currDate3, currDate4, currDate5];
var dates_list = [date1, date2, date3, date4, date5];
var wind_list = [wind1, wind2, wind3, wind4, wind5];
var humidity_list = [humidity1, humidity2, humidity3, humidity4, humidity5];
var searchHistory = localStorage.searchHistory
  ? JSON.parse(localStorage.searchHistory)
  : [];

// get 5 days from today
for (var i = 0; i < date_list.length; i++) {
  date_list[i].setDate(date_list[i].getDate() + (i + 1));
}

// default weather at Atlanta
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/atlanta/next7days?unitGroup=us&include=days&key=EWVGLDTVF5WBFWRDFYRTPDE2X&contentType=json"
)
  .then((res) => res.json())
  .then((data) => {
    city.text(data.resolvedAddress);
    date.text(today_date);
    temp.text(data.days[0].temp + " ° F");
    wind.text("Wind: " + data.days[0].windspeed + " MPH");
    uv_index.text(data.days[0].uvindex);
    humidity.text("Humidity: " + data.days[0].humidity + "%");
    conditions.text(data.days[0].conditions);
    temp_1.text("Temp: " + data.days[1].tempmax + " ° F");
    temp_2.text("Temp: " + data.days[2].tempmax + " ° F");
    temp_3.text("Temp: " + data.days[3].tempmax + " ° F");
    temp_4.text("Temp: " + data.days[4].tempmax + " ° F");
    temp_5.text("Temp: " + data.days[5].tempmax + " ° F");
    for (var i = 0; i < dates_list.length; i++) {
      dates_list[i].text(date_list[i].toDateString());
      wind_list[i].text("Wind: " + data.days[i + 1].windspeed + " MPH");
      humidity_list[i].text("Humidity: " + data.days[i + 1].humidity + "%");
    }
    console.log(data);
  });

// capture user input and display current weather and 5 day forcast
function Alert() {
  var user_location_input = location_search.val().toLowerCase();

  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      user_location_input +
      "/next7days?unitGroup=us&include=days&key=EWVGLDTVF5WBFWRDFYRTPDE2X&contentType=json"
  )
    .then((res) => res.json())
    .then((data) => {
      city.text(data.resolvedAddress);
      date.text(today_date);
      temp.text(data.days[0].temp + " ° F");
      wind.text("Wind: " + data.days[0].windspeed + " MPH");
      uv_index.text(data.days[0].uvindex);
      humidity.text("Humidity: " + data.days[0].humidity + "%");
      conditions.text(data.days[0].conditions);
      temp_1.text("Temp: " + data.days[1].tempmax + " ° F");
      temp_2.text("Temp: " + data.days[2].tempmax + " ° F");
      temp_3.text("Temp: " + data.days[3].tempmax + " ° F");
      temp_4.text("Temp: " + data.days[4].tempmax + " ° F");
      temp_5.text("Temp: " + data.days[5].tempmax + " ° F");
      for (var i = 0; i < dates_list.length; i++) {
        dates_list[i].text(date_list[i].toDateString());
        wind_list[i].text("Wind: " + data.days[i + 1].windspeed + " MPH");
        humidity_list[i].text("Humidity: " + data.days[i + 1].humidity + "%");
      }
      console.log(data);
    });
}

// allows user to search by pressing enter key
function enter_search(e) {
  if (e.keyCode === 13) {
    Alert();
    searchHistory.push(location_search.val());
    localStorage.searchHistory = JSON.stringify(searchHistory);
  }
}

location_search.keyup(enter_search);
