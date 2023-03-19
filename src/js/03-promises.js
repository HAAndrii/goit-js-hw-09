const btn = document.querySelector('button');
const firstDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

btn.addEventListener('click', onbtn);

function onbtn(e) {
  e.preventDefault();
  for (let i = 0; i < amount.value; i+=1) {
    const delay = Number(firstDelay.value) + stepDelay.value * i;
    const position = i + 1;
    
    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });


