// Write your JavaScript code here!

// const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    console.log(form)
    form.addEventListener("submit", function () {
        let pilot = form.pilotName.value;
        let copilot = form.copilotName.value;
        let fuelLevel = form.fuelLevel.value;
        let cargoLevel = form.cargoMass.value;
        let list = document.getElementById("faultyItems");
        console.log(pilot.value)
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        event.preventDefault();
    });
    


    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     let singlePlanet = pickPlanet(listedPlanets)
     console.log(singlePlanet)
     addDestinationInfo(document, singlePlanet.name, singlePlanet.diameter, singlePlanet.star, singlePlanet.distance, singlePlanet.moons, singlePlanet.image);
    })



});