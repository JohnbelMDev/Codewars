// Params : Take an object
// Return : boolean

function match(candidate, job) {
  // is this job a valid match for the candidate?
//   console.log(candidate.minSalary)
  let percent;
  if(candidate.minSalary * 0.9 <= job.maxSalary){
    return true
  }
  else if (Object.keys(candidate).length === 0 || Object.keys(job).length === 0 ){
    throw 'Error';
  }
  else {
    return false
  }
}
