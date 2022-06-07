// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', () => {
    const moveRocket = (x, y) => {
        let rocket = document.getElementById('rocket');
        rocket.style.position = 'absolute';    
        rocket.style.top = y;
        rocket.style.left = x;
    };


    // initialize rocket
    console.log('Starting Studio 6/6/22');
    moveRocket('40%', '250px');

    document.getElementById('takeoff')
        .addEventListener('click', () => {        
            let isConfirmed = window.confirm('Confirm that the shuttle is ready for takeoff.');
            console.log(isConfirmed);

            if(isConfirmed){
                // The flight status should change to "Shuttle in flight."
                document.getElementById('flightStatus')
                    .innerText = 'Shuttle in flight.';

                // The background color of the shuttle flight screen 
                // (id = "shuttleBackground") should change from green to blue.
                document.getElementById('shuttleBackground')
                    .style.backgroundColor = 'blue';
                
                // The shuttle height should increase by 10,000 miles.
                document.getElementById('spaceShuttleHeight')
                    .innerText = '10,000';                
            }
            moveRocket('40%', '0px');    
    });

    document.getElementById('landing')
        .addEventListener('click', () => {  
            // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
            alert('The shuttle is landing. Landing gear engaged.');

            // The flight status should change to "The shuttle has landed."
            document.getElementById('flightStatus')
                    .innerText = 'The shuttle has landed.';

            // The background color of the shuttle flight screen should change from blue to green.
            document.getElementById('shuttleBackground')
                    .style.backgroundColor = 'green';

            // The shuttle height should go down to 0.
            document.getElementById('spaceShuttleHeight')
                    .innerText = '0';
            moveRocket('40%', '250px');
    });

    document.getElementById('missionAbort')
        .addEventListener('click', () => {  
            // A window confirm should let the user know "Confirm that you want to abort the mission."
            // If the user wants to abort the mission, then add parts b-d.
            let isConfirmed = window.confirm('Confirm that you want to abort the mission.');
            console.log(isConfirmed);

            if(isConfirmed){
                // The flight status should change to "Mission aborted."
                document.getElementById('flightStatus')
                    .innerText = 'Mission aborted.';
            
                // The background color of the shuttle flight screen should change from blue to green.
                document.getElementById('shuttleBackground')
                    .style.backgroundColor = 'green';
                
                // The shuttle height should go to 0.
                document.getElementById('spaceShuttleHeight')
                    .innerText = '0';

                moveRocket('40%', '250px');
            } 
    });
});