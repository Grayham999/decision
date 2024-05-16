const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10; // Children
    } else if (age >= 13 && age <= 17) {
        return 15; // Teenagers
    } else {
        return 20; // Adults
    }
}

rl.question('Enter your age: ', (age) => {
    age = parseInt(age); // Convert input to integer

    if (isNaN(age) || age < 0) {
        console.log("Invalid age. Please enter a valid age.");
    } else {
        const ticketPrice = calculateTicketPrice(age);
        console.log("The price of your movie ticket is: $" + ticketPrice);
    }

    rl.close();
});
