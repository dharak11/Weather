const app = {
    init: () => {
    //Task 1:
    //TODO: Add event Listener for app.fetchWeather and app.getLocation
     
    },
    fetchWeather: (ev) => {
      //use the values from latitude and longitude to fetch the weather
      //TODO: get lat value from id = latitude input
      let lat
      //TODO: get lon value from id = longitude input
      let lon 
      //Add your Key for the API Call
      let key = '';
      let lang = 'en';
      let units = 'metric';
      //Create URL from the API document to get weather Data
      let url = ``;
      //TODO:fetch the weather
      //TODO:call fetch.then.the.catch method of javascript
      //TODO:If !response.ok throw error and print in console.err 
      //TODO:If everything is okay call   app.showWeather
     
    },
    getLocation: (ev) => {

      //TODO:Add options for navigator.geolocation.getCurrentPosition method
      let opts = {};
      //TODO: call  navigator.geolocation.getCurrentPosition to get current location and use callback function app.ftw and app.wtf
    },
    ftw: (position) => {
      //got position
      //TODO:set position.coords.latitude value to the input id='latitude' of HTML
      //TODO:set position.coords.longitude value to the input id='longitude'of HTML

    },
    wtf: (err) => {
      //geolocation failed
      //TODO:console.error the err value
    },
    showWeather: (resp) => {
      //Get the row from the HTML using querySelector
      let row = document.querySelector('.weather.row');
      //clear out the old weather and add the new
      row.innerHTML = '';
      //TODO: map resp.daily Array.
      //TODO: If resp.daily has more then 3 values print only first 3 values. else print all Values.
      //TODO:The Card should show image from day.weather[0].icon. url for image is src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png"
      //TODO:All other Data  of Card should look as per the README.md ScreenShort.
    },
  };
  
  app.init();
