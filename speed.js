function radarDevice(speed) {
    const velocityLimit = 70; // Define the legal velocity limit
    const distancePerPoint = 5; // Distance per point threshold
    
    // Calculate the excess speed and points directly
    const excessSpeed = speed - velocityLimit;
    const points = Math.floor(excessSpeed / distancePerPoint); // Use Math.floor to ensure whole points
    
    // Determine the output based on speed
    if (speed <= velocityLimit) {
        console.log("Ok"); // Speed within the limit
    } else if (points > 12) {
        console.log("License suspended"); // Too many points
    } else {
        console.log(`Points: ${points}`); // Display points within limit
    }
}

// Test cases
radarDevice(80);  // Speed above the limit but points < 12
radarDevice(280); // Speed far above the limit, license suspended
radarDevice(60);  // Speed within the limit
