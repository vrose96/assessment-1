///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0;

for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log("Total Acres Picked for the Week:", totalAcres);

// I started by making the total acres varible 0 because it's common practice and it's going to accumulate the values within the loop. 
//I used the .length code because I wanted the loop to run for a week which is 7 days. The lenght of the arrays was 7 so using that code made sense. As it loops through the goals was to add the acres for each type of apple
//Lastly, using console.log is to accrualty show the total number of acres picked for the week and shows the answer is the console. 

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}

const numberOfDays = fujiAcres.length;
const averageDailyAcres = totalAcres / numberOfDays;

console.log('Average Daily Acres Picked:', averageDailyAcres);

//I started by setting up a variable called totalAcres to keep track of the total number of acres picked.
//Using a loop, I went through each day of the week and added up the acres picked for each type of apple. 
//Then I figured out the number of days in the week by looking at the length of one of the arrays.
//I then calculated the average daily acres by dividing the total acres by the number of days.
//Finally, I printed out the average daily acres to the console.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0) {
    days++;
    acresLeft -= averageDailyAcres;
}

console.log('Number of Days to Finish:', days);

//The iterates loop through each day, incrementing the days counter and reducing the acresLeft.
//After the loop, we log the final number of days needed to finish picking all the apples to the console.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

const fujiTons = fujiAcres.slice();
const galaTons = galaAcres.slice();
const pinkTons = pinkAcres.slice();

const tonsPerAcre = 6.5;

for (let i = 0; i < fujiTons.length; i++) {
    fujiTons[i] *= tonsPerAcre;
    galaTons[i] *= tonsPerAcre;
    pinkTons[i] *= tonsPerAcre;
  }

console.log("Fuji Tons:", fujiTons);
console.log("Gala Tons:", galaTons);
console.log("Pink Tons:", pinkTons);

// let fujiTons = [13,19.5,19.5,13,13,13,6.5]
// let galaTons = [32.5, 13, 26, 19.5, 39, 13, 26]
// let pinkTons = [6.5, 32.5, 26, 13, 6.5, 32.5, 26]

//I used slice to make copies of the original arrays. I did this to make copies so I can work with the copies instead of the original copy.
//We go through each day's data in the copied arrays and multipy it 6.5 to convert the amount from acres to tons.
//We make copies to avoid changes to the original data

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let totalPoundsFuji, totalPoundsGala, totalPoundsPink;

const poundsPerTon = 2000;

totalPoundsFuji = fujiTons.reduce((sum, tons) => sum + tons, 0) * poundsPerTon;
totalPoundsGala = galaTons.reduce((sum, tons) => sum + tons, 0) * poundsPerTon;
totalPoundsPink = pinkTons.reduce((sum, tons) => sum + tons, 0) * poundsPerTon;

console.log("Total Pounds of Fuji Apples:", totalPoundsFuji);
console.log("Total Pounds of Gala Apples:", totalPoundsGala);
console.log("Total Pounds of Pink Apples:", totalPoundsPink);

// let fujiPounds = 195000
// let galaPounds = 338000
// let pinkPounds = 286000

//I use the reduce method to add up the tons for each variety. 
//The reduce method takes a function that adds each value to the running sum. The 0 at the end is the initial value of the sum.
//After summing up the tons, I multiply by poundsPerTon to convert the total from tons to pounds.

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

const fujiProfit = totalPoundsFuji * fujiPrice;
const galaProfit = totalPoundsGala * galaPrice;
const pinkProfit = totalPoundsPink * pinkPrice;

console.log("Profit from Fuji Apples: $", (fujiProfit / 100).toFixed(2));  
console.log("Profit from Gala Apples: $", (galaProfit / 100).toFixed(2));
console.log("Profit from Pink Apples: $", (pinkProfit / 100).toFixed(2));

// let fujiProfit = $ 1735.50
// let galaProfit = $ 2163.20
// let pinkProfit = $ 1573.00

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

const totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Total Profit from Apple Sales: $", (totalProfit / 100).toFixed(2));
