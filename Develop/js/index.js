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
const searchHistory = $("#searchHistory");
const historicalItem = $(".historicalItem");
const img1 = $(".img1");
const img2 = $(".img2");
const img3 = $(".img3");
const img4 = $(".img4");
const img5 = $(".img5");
const img6 = $(".img6");
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
var img_list = [img1, img2, img3, img4, img5, img6];

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
    uv_index.text("UV Index: " + data.days[0].uvindex);
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
    var forcast6 = data.days[0].conditions;
    var forcast1 = data.days[1].conditions;
    var forcast2 = data.days[2].conditions;
    var forcast3 = data.days[3].conditions;
    var forcast4 = data.days[4].conditions;
    var forcast5 = data.days[5].conditions;

    var forcast_list = [
      forcast1,
      forcast2,
      forcast3,
      forcast4,
      forcast5,
      forcast6,
    ];

    for (var i = 0; i < img_list.length; i++) {
      if (forcast_list[i].toLowerCase().includes("rain")) {
        img_list[i].attr("src", "Assets/storm.png");
      } else if (forcast_list[i].toLowerCase().includes("cloudy")) {
        img_list[i].attr("src", "Assets/cloudy.png");
      } else {
        img_list[i].attr("src", "Assets/sun.png");
      }
    }

    // display color level for uv index
    var uv_index_int = parseInt(data.days[0].uvindex);
    if (uv_index_int > 0 && uv_index_int < 3) {
      uv_index.css("background-color", "green");
    }
    if (uv_index_int >= 3 && uv_index_int < 6) {
      uv_index.css("background-color", "yellow");
      uv_index.css("color", "black");
    }
    if (uv_index_int >= 6 && uv_index_int < 8) {
      uv_index.css("background-color", "orange");
    }
    if (uv_index_int >= 8) {
      uv_index.css("background-color", "red");
    }
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
      uv_index.text("UV Index: " + data.days[0].uvindex);
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
      var forcast6 = data.days[0].conditions;
      var forcast1 = data.days[1].conditions;
      var forcast2 = data.days[2].conditions;
      var forcast3 = data.days[3].conditions;
      var forcast4 = data.days[4].conditions;
      var forcast5 = data.days[5].conditions;

      var forcast_list = [
        forcast1,
        forcast2,
        forcast3,
        forcast4,
        forcast5,
        forcast6,
      ];

      // display weather icon depending on forcast
      for (var i = 0; i < img_list.length; i++) {
        if (forcast_list[i].toLowerCase().includes("rain")) {
          img_list[i].attr("src", "Assets/storm.png");
        } else if (forcast_list[i].toLowerCase().includes("cloudy")) {
          img_list[i].attr("src", "Assets/cloudy.png");
        } else {
          img_list[i].attr("src", "Assets/sun.png");
        }
      }

      // display color level for uv index
      var uv_index_int = parseInt(data.days[0].uvindex);
      if (uv_index_int > 0 && uv_index_int < 3) {
        uv_index.css("background-color", "green");
      }
      if (uv_index_int >= 3 && uv_index_int < 6) {
        uv_index.css("background-color", "yellow");
        uv_index.css("color", "black");
      }
      if (uv_index_int >= 6 && uv_index_int < 8) {
        uv_index.css("background-color", "orange");
      }
      if (uv_index_int >= 8) {
        uv_index.css("background-color", "red");
      }
    });
}
// allows user to search by pressing enter key
var recentSearches = [];

function enter_search(e) {
  if (e.keyCode === 13) {
    Alert();
    recentSearches.push(location_search.val());
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    // console.log(recentSearches);
    location_search.val("");
    $("#searchHistory").text("");

    $.each(recentSearches, function (index, value) {
      $("#searchHistory").append(
        "<li class='historyItem'  onclick='addtotextbox(" +
          index +
          ")'>" +
          value +
          "</li>"
      );
    });
  }
}

function getHistory() {
  var storedValue = JSON.parse(localStorage.getItem("recentSearches"));
  $.each(storedValue, function (index, value) {
    $("#searchHistory").append(
      "<li class='historyItem'  onclick='addtotextbox(" +
        index +
        ")'>" +
        value +
        "</li>"
    );
  });
  console.log(storedValue);
}

function addtotextbox(id) {
  location_search.val(recentSearches[id]);
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      recentSearches[id] +
      "/next7days?unitGroup=us&include=days&key=EWVGLDTVF5WBFWRDFYRTPDE2X&contentType=json"
  )
    .then((res) => res.json())
    .then((data) => {
      city.text(data.resolvedAddress);
      date.text(today_date);
      temp.text(data.days[0].temp + " ° F");
      wind.text("Wind: " + data.days[0].windspeed + " MPH");
      uv_index.text("UV Index: " + data.days[0].uvindex);
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
    });
}
location_search.keyup(enter_search);
getHistory();
