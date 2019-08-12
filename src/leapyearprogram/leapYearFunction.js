/*
    Write a function leapYear(year) that returns true if the year is a leap year, false otherwise. The rules for leap years are:

        Only apply to years since 1582, throw an error for anything else
        if a year is divisible by 4 then it is a leap year
        except years divisible by 100, those are not leap years
        except years divisible by 400, those are leap years
*/

function leapYear(year) {
	return (
		year > 1582 && year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)
	);
}

console.log('leapYear(1568): ', leapYear(1568));
// true

console.log('leapYear(1600): ', leapYear(1600));
// true

console.log('leapYear(1500): ', leapYear(1500));
// false

console.log('leapYear(2019): ', leapYear(2019));
// false

console.log('leapYear(2000): ', leapYear(2000));
// true

console.log('leapYear(2020): ', leapYear(2020));
// true

console.log('leapYear(1984): ', leapYear(1984));
// true

console.log('leapYear(1983): ', leapYear(1983));
// false
