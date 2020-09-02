// define function

function areYouPlayingBanjo(name) {
  // check to see if the first index is equal to r
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  }
  // set a default if the first statement is not true
  else {
    return name + ' does not play banjo';
  }
}
