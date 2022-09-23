// Code your solution in this file!
const returnFirstTwoDrivers =( drivers )=> {
    // return [drivers[0], drivers[1]]
    return drivers.slice( 0, 2 )
}

const returnLastTwoDrivers =( drivers )=> {
    // return [ drivers[drivers.length - 2], drivers[drivers.length - 1 ] ]
    return drivers.slice( drivers.length - 2 )
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier =( number )=> 
    function higherOrderDumbDumb( fare ) {
        return fare * number
    }

const fareDoubler =( fare )=> createFareMultiplier( 2 )( fare )
const fareTripler =( fare )=> createFareMultiplier( 3 )( fare )

function selectDifferentDrivers( drivers, selectDrivers ) {
    return selectDrivers( drivers )
}