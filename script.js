function mincost(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  let totalCost = 0;
  
  // Keep connecting the two smallest ropes until only one remains
  while (arr.length > 1) {
    // Remove the two smallest elements
    const first = arr.shift();
    const second = arr.shift();
    
    // Cost of connecting these two ropes
    const cost = first + second;
    
    // Add to total cost
    totalCost += cost;
    
    // Insert the combined rope back into the array (maintaining sorted order)
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }
  
  return totalCost;
}