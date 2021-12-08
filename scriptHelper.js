// Write your helper functions here!
require('isomorphic-fetch');
// Here is the HTML formatting for our mission target div. 
    //*****THIS SHOULD BE A TEMPERATE LITERAL*****

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
    
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src= "${imageUrl}"/>
                 `

}


function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if
        (isNaN(testInput)) {
        return 'Not a Number';
    }
    else {
        return 'Is a Number';
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    list.style.visibility = "visible";

    if (validateInput(fuelLevel) === 'Empty') {
        window.alert('Please Enter Fuel Level')
        event.preventDefault();
    }
    if (validateInput(copilot) === 'Empty') {
        window.alert('Co-Pilot,Please Enter Name! ')
        event.preventDefault();
    }

    else {

        copilotStatus.innerHTML = `coPilot ${copilot} Ready`

    }
    if (validateInput(cargoLevel) === 'Empty') {
        window.alert('CargoLevel Please! ')
        event.preventDefault();
    }
    if (validateInput(pilot) === 'Empty') {
        window.alert('Pilot, Please Enter Name! ')
        event.preventDefault();
    }

    else {

        pilotStatus.innerHTML = `Pilot ${pilot} Ready`
    }
    launchStatus.style.color = "green"
    launchStatus.innerHTML = "Shuttle is Ready for Launch";

    if (fuelLevel < 10000) {
        window.alert("Fill that tank")
        launchStatus.style.color = "red"
        launchStatus.innerHTML = "Shuttle not ready for launch";
        fuelStatus.innerHTML = "Not enough Fuel for the Journey";
        event.preventDefault();
    }

    else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    if (cargoLevel > 10000) {
        window.alert("Shuttle not ready for launch")
        launchStatus.style.color = "red"
        launchStatus.innerHTML = "Shuttle not ready for launch";
        cargoStatus.innerHTML = "cargo mass too large";
    }

    else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    event.preventDefault();
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()

});

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[(Math.floor(Math.random() * planets.length))];
    return planet
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
