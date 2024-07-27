/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let count = 0;
    let n = capacity;
    
    for(let i = 0; i < plants.length; i++){
        if(capacity >= plants[i]){
            capacity -= plants[i];
            count++;
        } else {
            count += (i*2)+1 
            capacity = n-plants[i];
        }
        
    }
    return count;
};