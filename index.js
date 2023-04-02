function findMatching(drivers,string){
    return drivers.filter((driver)=>driver.toLowerCase
    ()===string.toLowerCase());
}
function  fuzzyMatch(drivers,string){
return drivers.filter((driver)=>driver.slice(0,2)===string.slice(0,2));
}
function  matchName(driver,string){
    return driver.filter((driver)=>driver.name===string);
}

