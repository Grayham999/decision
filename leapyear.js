function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If the year is divisible by 100 and not divisible by 400, it's not a leap year
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        // If the year is not divisible by 100 or is divisible by 400, it's a leap year
        return true;
    }
    // If the year is not divisible by 4, it's not a leap year
    return false;
}

// usage:
const year = 2023;
console.log(year + " is a leap year:", isLeapYear(year));
