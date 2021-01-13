//Taking a string as a parameter
//return string with only initials
//Same Harris
    //S.H

function abbrevName(name){

    // code away
    let splitString = name.split(' ')
    let firstInitials = splitString[0].split('')[0].toUpperCase()
    let secoInitials = splitString[1].split('')[0].toUpperCase()
    let initials = [firstInitials,secoInitials].toString()
    return initials.replace(/,/g, '.')
}

console.log(abbrevName("sam harris"));
