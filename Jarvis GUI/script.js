function updateDateTime() {
    var now = new Date();
    var currentDateElement = document.getElementById("current-date1");
    var currentTimeElement = document.getElementById("current-time1");

    currentDateElement.textContent = now.toLocaleDateString();
    currentTimeElement.textContent = now.toLocaleTimeString();
  }

  // Update date and time every second
  setInterval(updateDateTime, 1000);

  // Initial call to display date and time immediately
  updateDateTime();

  function speak(audio) {
    var speechSynthesis = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(audio);
    speechSynthesis.speak(utterance);
}

function processCommand() {
    var command = document.getElementById("commandInput").value.toLowerCase();
    if (command === "hello") {
        speak("Hello sir, how are you?");
    } 
    else if (command === "hi") {
        speak("Hi sir, how are you?");
    } 
    else if ((command.includes("how are you"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : I am good sir</p>`;
        speak("I am good")
    }
    else if ((command.includes("open google"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening google</p>`;
        // speak("Opening google")
        openWebsite("https://google.com")
    }
    else if ((command.includes("open youtube"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening Youtube</p>`;
        // speak("Opening google")
        openWebsite("https://youtube.com")
    }
    else if ((command.includes("open gmail"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening Gmail</p>`;
        // speak("Opening google")
        openWebsite("https://gmail.com")
    }
    else if ((command.includes("open email"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening Email</p>`;
        // speak("Opening google")
        openWebsite("https://gmail.com")
    }
    else if ((command.includes("open whatsapp"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening Whatsapp</p>`;
        // speak("Opening google")
        openWebsite("https://web.whatsapp.com")
    }
    else if ((command.includes("open instagram"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening Instagram</p>`;
        // speak("Opening google")
        openWebsite("https://instagram.com")
    }
    else if ((command.includes("open facebook"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening Facebook</p>`;
        // speak("Opening google")
        openWebsite("https://facebook.com")
    }
    else if ((command.includes("open chatgpt"))){
        const Output = document.getElementById("output");
        Output.innerHTML = `<p>Jarvis : Opening ChatGPT</p>`;
        // speak("Opening google")
        openWebsite("https://chat.openai.com")
    }
    else if (command === "whether"){
      weather();
    }
    else if (command === "news"){
      fetchNews();
    }
    else {
        speak("Command not recognized");
    }
}
async function weather() {
  try {
      const api_key = "1ac5fe9217d14f20bca64622231311"; // Your API key (Don't share it publicly)
      const myArray = ["delhi", "lucknow", "banaras", "allahabad", "prayagraj"];
      // Randomly choose an element from the array
      const randomIndex = Math.floor(Math.random() * myArray.length);
      const randomElement = myArray[randomIndex];
      const city = randomElement;
      const country = "india";

      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`);
      const forecast_response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&aqi=no`);

      const responseData = await response.json();
      const forecastData = await forecast_response.json();

      const weather = responseData.current.condition.text;
      const wind = responseData.current.wind_kph;
      const region = responseData.location.region;
      const localtime = responseData.location.localtime;
      const min_temp_f = forecastData.forecast.forecastday[0].day.mintemp_f;
      const max_temp_f = forecastData.forecast.forecastday[0].day.maxtemp_f;
      const min_temp_c = (min_temp_f - 32) / 1.8;
      const max_temp_c = (max_temp_f - 32) / 1.8;
      const rain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;
      const snow = forecastData.forecast.forecastday[0].day.daily_chance_of_snow;
      const sunrise = forecastData.forecast.forecastday[0].astro.sunrise;
      const sunset = forecastData.forecast.forecastday[0].astro.sunset;
      const moonrise = forecastData.forecast.forecastday[0].astro.moonrise;
      const moonset = forecastData.forecast.forecastday[0].astro.moonset;

      const weatherOutput = document.getElementById("weatherOutput");
      weatherOutput.innerHTML = `
          <p>Current speed of wind in ${city}: ${wind} kph</p>
          <p>Region: ${region}</p>
          <p>Local time: ${localtime}</p>
          <p>Minimum Temperature: ${min_temp_f}</p>
          <p>Maximum Temperature: ${max_temp_f}</p>
          <p>Minimum Temperature (celsius): ${min_temp_c}</p>
          <p>Maximum Temperature (celsius): ${max_temp_c}</p>
          <p>Chances of rain: ${rain}%</p>
          <p>Chances of snow: ${snow}%</p>
          <p>Sunrise Time: ${sunrise}</p>
          <p>Sunset Time: ${sunset}</p>
          <p>Moonrise Time: ${moonrise}</p>
          <p>Moonset Time: ${moonset}</p>
          <p>Weather (${city}): ${weather}</p>
      `;
      
      // Speak the weather information
    //   const speech = new SpeechSynthesisUtterance(weatherOutput.innerText);
    //   speech.lang = 'en-US';
    //   speech.rate = 0.9;
    //   speech.volume = 1;
    //   speech.pitch = 1;
    //   window.speechSynthesis.speak(speech);
  } catch (error) {
      const weatherOutput = document.getElementById("weatherOutput");
      weatherOutput.textContent = "";
  }
  // setInterval(weather, 1000);
}
async function fetchNews() {
  try {
      const api_key = "pub_33117cdfdfaff7df9f4d6c4e329839abc2668";
      const myArray = ["crime", "technology", "entertainment"];
      // Randomly choose an element from the array
      const randomIndex = Math.floor(Math.random() * myArray.length);
      const randomElement = myArray[randomIndex];
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&q=delhi&country=in&language=en&category=${randomElement}`);
      const responseData = await response.json();

      const title = responseData.results[0].title;
      const description = responseData.results[0].description;
      const publish = responseData.results[0].pubDate;

      const weatherOutput = document.getElementById("newsOutput");
      weatherOutput.innerHTML = `
          <p>Title: ${title}</p>
          <p>Description: ${description}</p>
          <p>Published At: ${publish}</p>
      `;

      // Speak the news information
    //   const speech = new SpeechSynthesisUtterance(`Title: ${title}. Sub headlines: ${description}. Published At: ${publish}`);
    //   speech.lang = 'en-US';
    //   speech.rate = 0.9;
    //   speech.volume = 1;
    //   speech.pitch = 1;
    //   window.speechSynthesis.speak(speech);
  } catch (error) {
      console.error("Error fetching news:", error);
  }
  // setInterval(fetchNews, 5000);
}
function getSystemDetails() {
  var systemDetails = {};
  
  // Operating System Details
  systemDetails["System"] = navigator.platform;
  systemDetails["Node Name"] = "Not applicable"; // Not directly available in JavaScript
  systemDetails["Release"] = "Not applicable"; // Not directly available in JavaScript
  systemDetails["Version"] = navigator.appVersion;
  systemDetails["Machine"] = "Not applicable"; // Not directly available in JavaScript
  systemDetails["Processor"] = "Not applicable"; // Not directly available in JavaScript
  
  // Windows Specific Details
  if (systemDetails["System"].indexOf("Win") !== -1) {
      systemDetails["Windows Version"] = navigator.appVersion.match(/Windows NT (\d+\.\d+)/)[1];
  }
  
  return systemDetails;
}

// Get system details and display them
var systemDetails = getSystemDetails();
var systemDetailsDiv = document.getElementById("system-details");

for (var key in systemDetails) {
  if (systemDetails.hasOwnProperty(key)) {
      var p = document.createElement("p");
      p.textContent = key + ": " + systemDetails[key];
      systemDetailsDiv.appendChild(p);
  }
}

function wish() {
  var hour = new Date().getHours();
  var outputDiv = document.getElementById("output");
  var message = "";

  if (hour >= 0 && hour < 12) {
      message = "Good Morning :)";
  } else if (hour >= 12 && hour < 18) {
      message = "Good Afternoon :)";
  } else {
      message = "Good Evening";
  }

  // Display the message in the output div
  outputDiv.textContent = message;

  // You can further enhance this function to add more details or actions.
}
// function getWifiSystemLog() {
//   var wifiOutput = document.getElementById("wifioutput");
//   wifiOutput.innerHTML = "Wi-Fi System Log:<br>";
  
//   try {
//     // Run the netsh command to get the system log of Wi-Fi
//     var result = doNetshCommand();
//     // Print the system log of Wi-Fi with a gap of 0.2 seconds between each line
//     var lines = result.split('\n');
//     lines.forEach(function(line) {
//       wifiOutput.innerHTML += line + "<br>";
//     });
//   } catch (error) {
//     wifiOutput.innerHTML += "Error: " + error;
//   }
// }
// var jsonData = {
//   "settings": {
//     "assistant_details": {
//       "designation": "sir",
//       "name": "J.A.R.V.I.S",
//       "version": "1.5.0",
//       "speed_of_speaking": 170,
//       "volume": 0.5,
//       "voice_gender": "male",
//       "voice_type": "sapi5"
//     },
//     "audio_paths": {
//       "poweroff_sound": "C:/Windows/Media/Windows Shutdown.wav",
//       "background_music": "C:/Users/Infort/OneDrive/Desktop/C programming Projects/Jarvis/Audios/bg.mp3",
//       "weather_audio": "C:/Users/Infort/OneDrive/Desktop/C programming Projects/Jarvis/Audios/whether.mp3"
//     }
//   },
//   "functions": {
//     "web_actions": [
//       "search on Google",
//       "open YouTube",
//       "open Google",
//       "open web browser",
//       "open Visual Studio Code",
//       "open Gmail",
//       "open Email",
//       "open files",
//       "open file explorer",
//       "open PPSSPP",
//       "open Sublime Text",
//       "open WhatsApp",
//       "open Instagram",
//       "open Facebook",
//       "open ChatGPT",
//       "open OpenAI overview",
//       "open OpenAI playground",
//       "make file",
//       "make file in the same directory",
//       "make file in specific directory",
//       "hide files",
//       "show files"
//     ],
//     "utility_actions": [
//       "get battery percentage",
//       "play power-off sound",
//       "shut down PC",
//       "lock screen",
//       "unlock screen",
//       "download audio from YouTube",
//       "get news",
//       "check weather",
//       "read Wikipedia summary"
//     ],
//     "greetings": [
//       "Hello",
//       "How are you?",
//       "Who are you?",
//       "What's your name?",
//       "Who made you?",
//       "What are you doing?",
//       "Coffee or tea?",
//       "Good",
//       "Nice",
//       "Better"
//     ],
//     "song": "play a song"
//   }
// };

// var outputDiv = document.getElementById("help");
// outputDiv.innerText = JSON.stringify(jsonData, null, 2);


function openWebsite(url) {
  window.open(url);
  console.log(`Opening ${url} :)`);
  // Assuming there's a function named speak() for text-to-speech
  speak(`Opening Sir`);
}
function playSound() {
  var audio = new Audio('C:/Users/Infort/OneDrive/Desktop/Confidentials/Jarvis GUI/whether.mp3');
  audio.play();
}
function closeContainer() {
  var container = document.querySelector('.website-container');
  container.style.display = 'none'; // Hide the container
}


function startCountdown() {
  var minutesSpan = document.getElementById('minutes');
  var secondsSpan = document.getElementById('seconds');
  var millisecondsSpan = document.getElementById('milliseconds');

  var totalTime = Math.floor(Math.random() * (240000 - 1000)) + 1000; // Random time between 1 and 240 seconds (4 minutes)
  var startTime = Date.now();

  function updateTimer() {
      var elapsed = Date.now() - startTime;
      var remaining = totalTime - elapsed;

      var minutes = Math.floor(remaining / (1000 * 60));
      var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      var milliseconds = Math.floor((remaining % 1000) / 10);

      minutesSpan.textContent = formatTime(minutes);
      secondsSpan.textContent = formatTime(seconds);
      millisecondsSpan.textContent = formatTime(milliseconds);

      if (remaining <= 0) {
          clearInterval(interval);
          minutesSpan.textContent = '00';
          secondsSpan.textContent = '00';
          millisecondsSpan.textContent = '00';
      }
  }

  var interval = setInterval(updateTimer, 10);
  updateTimer();
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
function loadContent() {
  var div = document.getElementById("whetherOutput");
  var interval = setInterval(function() {
    // Check if content is loaded
    if (div.textContent.trim() !== "Loading...") {
      clearInterval(interval); // Stop checking
    } else {
      // Simulate loading by adding dots
      var text = div.textContent;
      if (text.length < 13) {
        div.textContent += ".";
      } else {
        div.textContent = "Loading"; // Reset text
      }
    }
  }, 500); // Check every 500 milliseconds
}


// Define the div element where the hacking animation will appear
const hackingDiv = document.getElementById('hackingDiv');

// Define a function to generate random characters
function generateRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|<>?,./';
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
}

// Define the length of the text
const textLength = 60; // Adjust this to control the length of each line of text

// Define the interval for updating the text (in milliseconds)
const updateInterval = 100; // Adjust this to control the speed of the animation

// Define a function to generate the hacking animation
function hackingAnimation() {
    // Create an empty string to hold the generated text
    let hackingText = '';

    // Generate random characters and append them to the string
    for (let i = 0; i < textLength; i++) {
        hackingText += generateRandomChar();
    }

    // Add a newline at the end of each line to keep the text scrolling
    hackingText += '\n';

    // Append the new line of text to the div
    hackingDiv.textContent += hackingText;

    // Scroll the div to the bottom to simulate continuous scrolling
    hackingDiv.scrollTop = hackingDiv.scrollHeight;
}

// Start the hacking animation by calling the function at regular intervals
setInterval(hackingAnimation, updateInterval);
// Call the function when the page is loaded
window.onload = loadContent;
// Call the wish function when the page loads
window.onload = function() {
  wish();
  // getWifiSystemLog();
};
window.onload = function() {
  fetchNews();
  weather();
  startCountdown();
}