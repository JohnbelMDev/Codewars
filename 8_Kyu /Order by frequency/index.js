const mostFrequent = (arr, limit) => {
    let counts = {}
    arr.forEach(ch => counts[ch] = (counts[ch] || 0) + 1)
    let set = Object.keys(counts).sort((a, b) => counts[b] - counts[a])
    return set.slice(0, limit)  
  }

console.log(mostFrequent(['x','g','x','t','g','x'],2));
// console.log(mostFrequent(['c','b','b','a','a','a']));
// console.log(mostFrequent(['k','j']));