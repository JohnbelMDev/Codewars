const flatten = a => a.reduce((r, e) => r.concat(Array.isArray(e) ? flatten(e) : e), []);


console.log(flatten([1, [[2], 3, 4], 5]));
