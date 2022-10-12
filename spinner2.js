// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  '); 
// }, 900);
// ///

let time = 100; 

const stickMovement = ['|', '/' , '-', '\\', '|'];

for (const movement of stickMovement) {
  setTimeout(() => {
    process.stdout.write("\r" + movement);
  }, time)
  time = time + 200; 
};