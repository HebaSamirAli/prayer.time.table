var resultsArray = [];
const myDate = new Date();
var data = [];

var apiUrl = `http://api.aladhan.com/v1/calendar?latitude=29.34070564164084&longitude=47.94011498254232&method=8&month=${myDate.getUTCMonth()+1}&year=${myDate.getFullYear()}`;
      async function success(pos) {
        var crd = pos.coords;
        // console.log('first path',apiUrl);
        if (crd){
            apiUrl = `http://api.aladhan.com/v1/calendar?latitude=${crd.latitude}&longitude=${crd.longitude}&method=8&month=${myDate.getUTCMonth()+1}&year=${myDate.getFullYear()}`;
            // console.log('second path',apiUrl);
        }
        //fetch the time
        try {
            const response = await fetch(apiUrl);
            resultsArray = await response.json();
            // console.log(resultsArray);
        } catch (error){
            //Catch Error Here
        } 
        ///add DOM items to page
        const {body} = document;
        
        data = resultsArray.data[myDate.getUTCDate()-1].timings;

        var element_1 = document.createElement("h2");var element_2 = document.createElement("h2");
        var element_3 = document.createElement("h2");var element_4 = document.createElement("h2");
        var element_5 = document.createElement("h2");var element_6 = document.createElement("h2");
        var element_7 = document.createElement("h2");var element_8 = document.createElement("h2");
        element_1.textContent = `Fajr: ${data.Fajr}`;body.appendChild(element_1);
        element_2.textContent = `Sunrise: ${data.Sunrise}`;body.appendChild(element_2);
        element_3.textContent = `Dhuhr: ${data.Dhuhr}`;body.appendChild(element_3);
        element_4.textContent = `Asr: ${data.Asr}`;body.appendChild(element_4);
        element_5.textContent = `Sunset: ${data.Sunset}`;body.appendChild(element_5);
        element_6.textContent = `Maghrib: ${data.Maghrib}`;body.appendChild(element_6);
        element_7.textContent = `Isha: ${data.Isha}`;body.appendChild(element_7);
        element_8.textContent = `Imsak: ${data.Imsak}`;body.appendChild(element_8);
        // console.log("date now is: ",data); 
        // console.log('day',myDate.getUTCDate()-1)
        // console.log('month',myDate.getUTCMonth()+1)
        // console.log('year',myDate.getFullYear())
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    // athan api..........
    navigator.geolocation.getCurrentPosition(success, error);
    