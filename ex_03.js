function fillBus(peopleAtBusStops,busSeats){
	
    let passagers=0

    for (let i=0; i<peopleAtBusStops.length; i++){
  passagers+=peopleAtBusStops[i]
  
     if (passagers>busSeats){
         return i
     }
  }
      return -1

}

console.log(fillBus([1, 3, 10, 1], 10))