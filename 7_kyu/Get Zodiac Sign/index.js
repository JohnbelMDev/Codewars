const getZodiacSign = (day, month) => {
  // good luck
  switch (month) {
        case 1:
            return day > 19 ? 'Aquarius' : 'Capricorn'
            break;
        case 2:
            return day > 18 ? 'Pisces' : 'Aquarius'
            break;
        case 3:
            return day > 20 ? 'Aries' : 'Pisces'
            break;
        case 4:
            return day > 19 ? 'Taurus' : 'Aries'
            break;
        case 5:
            return day > 20 ? 'Gemini' : 'Taurus'
            break;
        case 6:
            return day > 20 ? 'Cancer' : 'Gemini'
            break;
        case 7:
            return day > 22 ? 'Leo' : 'Cancer'
            break;
        case 8:
            return day > 22 ? 'Virgo' : 'Leo'
            break;
        case 9:
            return day > 22 ? 'Libra' : 'Virgo'
            break;
        case 10:
            return day > 22 ? 'Scorpio' : 'Libra'
            break;
        case 11:
            return day > 21 ? 'Sagittarius' : 'Scorpio'
            break;
        case 12:
            return day > 21 ? 'Capricorn' : 'Sagittarius'
            break;
    }
}
