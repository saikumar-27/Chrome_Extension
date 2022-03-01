let weather = {                    //weather object that stores properties and methods               
    apiKey: "590b3dcd84a16a4f41f092295c30eaf8",    // API key
    fetchWeather: function (city) {                // FetchWeather function
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +   // Getting api
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();              // Converts into json object
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];   // Selects perticular objects from the data
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;   //Name
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";             //Icon
      document.querySelector(".description").innerText = description;     //Description
      document.querySelector(".temp").innerText = temp + "°C";            // Temp
      document.querySelector(".humidity").innerText =                     //Humidity
        "Humidity: " + humidity + "%";                          
      document.querySelector(".wind").innerText =                         //wind
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);   
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () { // Event-listner for search button (manually clicked)
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {    // press enter to output result
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("hyderabad");   //Default 