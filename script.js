function mincost(arr) {
  // Handle edge case
  if (arr.length <= 1) {
    return 0;
  }
  
  // Create a copy and sort it
  let ropes = arr.slice().sort((a, b) => a - b);
  let totalCost = 0;
  
  // Keep combining the two smallest ropes
  while (ropes.length > 1) {
    // Remove two smallest
    let first = ropes.shift();
    let second = ropes.shift();
    
    // Calculate cost
    let cost = first + second;
    totalCost += cost;
    
    // Add back and re-sort
    ropes.push(cost);
    ropes.sort((a, b) => a - b);
  }
  
  return totalCost;
}