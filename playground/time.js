const moment = require('moment');

// const date = new Date();
// console.log(date.getMonth());

const someTimeStamp = moment().valueOf();
console.log(someTimeStamp);


const date = moment(createdAt);
console.log(date.format('H:mm A'));