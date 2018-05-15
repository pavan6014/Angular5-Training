// Promise Example
// ---------------
// 1. withdraw money
// 2. update passbook (dependent on step 1)
// 3. apply for a loan

function performBankOperations() {
  const p = new Promise((resolve, reject) => {
    console.log('inside promise - withdraw money - begin');
    setTimeout(() => {
      console.log('setTimeout() callback - withdraw money - end');
      resolve(500);
    }, 5000);
  });
  p.then((amount) => {
    console.log('promise.then() callback - print passbook - withdrawal amount: (Rs.)', amount);
    console.log('promise state:', p);
  }).catch(() => {
    console.log('promise.catch() callback - you do not have enough cash for withdrawal');
    console.log('promise state:', p);
  });
  
  console.log('apply for a loan - done');
  console.log('promise state:', p);
}

performBankOperations();
