// What went wrong here?
// console.log('abc'.repeat(Infinity));  RangeError: Invalid count value

// console.log('abc'.repeat(1)); // 'abc'

/****************************************************************************
Make 3-5 different examples of range errors. 
Look at the console to see what line the error is on to know what to do when 
coming in contact with that error 

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1

// let a = [];
// a.length = a.length - 1;

// Error 2
// 'hello'.repeat(Infinity);

// Error 3
new Date('October 30, 2020');
new Date('foo-bar 2014');
new Date('2014-25-23').toISOString();

// Error 4

// Error 5