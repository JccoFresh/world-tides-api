//add JSONView extension to reformat json into a more readable format
let request = new XMLHttpRequest();
//let url = "https://www.worldtides.info/api?heights&lat=48.405513&lon=-123.443001&key=29815dd2-8841-4cb0-ae37-e4ff6b6e8d38"; //stores url of the API endpoint
let url = "https://www.worldtides.info/api?datum=LAT&extremes&lat=33.768321&lon=-118.195617&key=29815dd2-8841-4cb0-ae37-e4ff6b6e8d38";


//coord: 48.405513, -123.443001
request.open("GET", url, true);
request.onload = function() { //will execute the callback function once sent
    let data = JSON.parse(this.response);
    let hightide = document.getElementById("hightide");
    let lowtide = document.getElementById("lowtide");
    let hightide2 = document.getElementById("hightide2");
    let lowtide2 = document.getElementById("lowtide2");
    let hightide3 = document.getElementById("hightide3");
    let lowtide3 = document.getElementById("lowtide3");
    
    // 1st row
    let highDT = data.extremes[1].date.split("T");
    let highArray = [highDT];
    let highDateTime = highArray;
    let lowDT = data.extremes[0].date.split("T");
    let lowArray = [lowDT];
    let lowDateTime = lowArray;
    // 2nd row
    let highDT2 = data.extremes[3].date.split("T");
    let highArray2 = [highDT2];
    let highDateTime2 = highArray2;
    let lowDT2 = data.extremes[2].date.split("T");
    let lowArray2 = [lowDT2];
    let lowDateTime2 = lowArray2;
    // 3rd row
    let highDT3 = data.extremes[7].date.split("T");
    let highArray3 = [highDT3];
    let highDateTime3 = highArray3;
    let lowDT3 = data.extremes[6].date.split("T");
    let lowArray3 = [lowDT3];
    let lowDateTime3 = lowArray3;
    //station
    let station = document.getElementById("station");
    if (request.status >= 200 && request.status < 400) {
        //condition for when request is succesful, status code of request 
        station.innerHTML = "Location: " + data.station;
        //1st row
        hightide.innerHTML = "Date/Time: " + highDateTime + "<br />" + "Type: High Tide" + "<br />" + "Height: " + data.extremes[1].height + "m";
        lowtide.innerHTML = "Date/Time: " + lowDateTime + "<br />" + "Type: Low Tide" + "<br />" + "Height: " + data.extremes[0].height + "m";
        //2nd row
        hightide2.innerHTML = "Date/Time: " + highDateTime2 + "<br />" + "Type: High Tide" + "<br />" + "Height: " + data.extremes[3].height + "m";
        lowtide2.innerHTML = "Date/Time: " + lowDateTime2 + "<br />" + "Type: Low Tide" + "<br />" + "Height: " + data.extremes[2].height + "m";
        //3rd row
        hightide3.innerHTML = "Date/Time: " + highDateTime3 + "<br />" + "Type: High Tide" + "<br />" + "Height: " + data.extremes[7].height + "m";
        lowtide3.innerHTML = "Date/Time: " + lowDateTime3 + "<br />" + "Type: Low Tide" + "<br />" + "Height: " + data.extremes[6].height + "m";

    }

    else {
        hightide.textContent = "High tide not found!";
        lowtide.textContent = "Low tide not found!";

        hightide2.textContent = "High tide not found!";
        lowtide2.textContent = "Low tide not found!";

        hightide3.textContent = "High tide not found!";
        lowtide3.textContent = "Low tide not found!`";

    }

};
request.send();

function convertToEST(utc) {
    let utcHours = utc.substr(0, utc.indexOf(":"));
    let utcMinSec = utc.substr(utc.indexOf(":") + 1);
    let est = parseInt(utcHours, 10) - 5;
    est += ":" + utcMinSec;
    return est;
}
