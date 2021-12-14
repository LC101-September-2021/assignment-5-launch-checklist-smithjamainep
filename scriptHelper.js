// Write your helper functions here!
require('isomorphic-fetch');
// Here is the HTML formatting for our mission target div. 
//*****THIS SHOULD BE A TEMPERATE LITERAL*****

//you don't want the checks to happen if the fields are invalid. so if you give it a valid name and copilot or any number it should say it.
//when you give a valid pilot name it's not running through check.
//fix if you a number its a right type such as copilot name. when i enter a number it should only except a string pilot and copilot.
//get rid of the alert indicating whether shuttle is ready for launch.
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
        return 'Empty'
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
    
   

    // if (valid)
    // if true alert
    // if not true do an else if same test number or NaN
    // if (validateInput(copilot) === is Nan 
    // or logic case you are looking for and then && case you are not looking for.

    if (validateInput(fuelLevel) === 'Empty' || validateInput(pilot) === 'Empty' ||
        validateInput(copilot) === 'Empty' ||
        validateInput(cargoLevel) === 'Empty') {
        alert('All fields are required!')

    } else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(pilot) === 'Is a Number' ||
        validateInput(copilot) === 'Is a Number' ||
        validateInput(cargoLevel) === 'Not a Number') {
        alert('Make sure to enter valid information for each field!')
        
    }   else if (fuelLevel < 10000 || cargoLevel > 10000) {

        launchStatus.style.color = "red"
            launchStatus.innerHTML = "Shuttle is not Ready for Launch"

            if (fuelLevel < 10000) {
                fuelStatus.innerHTML = "There is not enough Fuel for the Journey";
            } else {
                fuelStatus.innerHTML = "There is enough Fuel for the Journey";
    
            }
            if (cargoLevel > 10000) {
                cargoStatus.innerHTML = "Cargo Mass too Heavy for Launch"
            } else {
                cargoStatus.innerHTML = "Cargo Mass low enough for the Journey";
            }
            
            } else { //ready for launch
                launchStatus.style.color = "green"
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                fuelStatus.innerHTML = "There is enough Fuel for the Journey"
                cargoStatus.innerHTML = "Cargo Mass low enough for Journey"
                list.style.visibility = "visible";
                copilotStatus.innerHTML = `coPilot ${copilot} Ready`
                pilotStatus.innerHTML = `Pilot ${pilot} Ready`
        }
    
       
        
        // let launchStatus = document.getElementById('launchStatus')
            
        
      
            

        
    }
        
        
        
            // if (fuelLevel < 10000 && cargoLevel <= 10000) { //this if if the fuel level and cargomass are too low
            // launchStatus.style.color = "red"
            // launchStatus.innerHTML = "Shuttle is not Ready for Launch";
            // fuelStatus.innerHTML = "There is enough Fuel for the Journey";
            // cargoLevel.innerHTML = " Cargo Mass too heavy for Launch";
             // launchStatus.style.color = "green"
            // launchStatus.innerHTML = "Shuttle is Ready for Launch";
            // fuelStatus.innerHTML = "Fuel level high enough for launch"
            // cargoLevel.innerHTML = "cargo Mass low enough for Launch"
        
        
    
    //     if (fuelLevel >= 10000 && cargoLevel <= 10000){ 
    //         launchStatus.style.color = "green"
    //         launchStatus.innerHTML = "Shuttle is Ready for Launch";
    //         fuelStatus.innerHTML = "Fuel level high enough for launch";
    //         cargoStatus.innerHTML = "Cargo mass low enough for launch"
    //     }
    //     if (fuelLevel < 10000 || cargoLevel > 10000) {
    //         launchStatus.style.color = "red"
    //         launchStatus.innerHTML = "Shuttle is not Ready for Launch";
    //     if (fuelLevel < 10000) {
    //         fuelStatus.innerHTML = "Fuel level is too Low for launch";
    //     }
    //     else {
    //         launchStatus.style.color = "green" 
    //         fuelStatus.innerHTML = "Fuel level is high enough for Launch"
    //         launchStatus.innerHTML = "Shuttle is Ready for Launch";

    //     } 
    //     if (cargoLevel > 10000) {
    //         launchStatus.style.color = "red"
    //         cargoStatus.innerHTML = "Cargo mass is too High for launch"
    //         launchStatus.innerHTML = "Shuttle is not Ready for Launch";

    //     }
    //     else {
    //         launchStatus.style.color = "green"
    //         cargoStatus.innerHTML = "Cargo mass is low enough for Launch"
    //         launchStatus.innerHTML = "Shuttle is Ready for Launch";
    //     }
    // }
    // }
        

        // launchStatus.style.color = "greenred"
        //     launchStatus.innerHTML = "Shuttle is Ready for Launch";
        //     fuelStatus.innerHTML = "Fuel level high enough for launch";



    

    //     if (fuelLevel < 10000) {
    //         // window.alert("Fill that tank")
    //         launchStatus.style.color = "red"
    //         launchStatus.innerHTML = "Shuttle not ready for launch";
    //         fuelStatus.innerHTML = "Not enough Fuel for the Journey";
    //         event.preventDefault();
    //     }

    //     else {
    //         fuelStatus.innerHTML = "Fuel level high enough for launch";
    //     }
    //     if (cargoLevel > 10000) {
    //         // window.alert("Shuttle not ready for launch")
    //         launchStatus.style.color = "red"
    //         launchStatus.innerHTML = "Shuttle not ready for launch";
    //         cargoStatus.innerHTML = "cargo mass too large";
    //     }

    //     else {
    //         cargoStatus.innerHTML = "Cargo mass low enough for launch";
    //     }

    //     event.preventDefault();



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
