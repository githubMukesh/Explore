function fooPull() {
  console.log('Hello from Pull World!');
  return 42;
}

const x = fooPull.call(this); // same as foo()
console.log(x);
const y = fooPull.call(this); // same as foo()
console.log(y);


/* -------------------vs -------------------------- */

import { Observable } from 'rxjs';
 
const foo = new Observable(subscriber => {
  console.log('Hello from Push World!');
  subscriber.next(42);
});
 
foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});

/*
1)Subscribing to an Observable is analogous to calling a Function.
2)Observables are able to deliver values either synchronously or asynchronously.
*/