// max 50 characters
// a has to be under limit

const smallEnough = (a, limit) => a.every(x => x <= limit);

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 10));
