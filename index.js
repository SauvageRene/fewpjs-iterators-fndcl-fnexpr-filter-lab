// Code your solution here
function findMatching(drivers, name) {
    let match = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase()
    )
    return match 
};

function fuzzyMatch (drivers, name) {
    let result  = drivers.filter(driver => driver.indexOf(name) === 0
    )
    return result
};

function matchName(drivers, name){
    return drivers.filter( driver => driver.name === name)
}

