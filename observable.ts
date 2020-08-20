import { Observable } from 'rxjs';
 
const foo = new Observable(subscriber => {
  console.log('Hello RxJs!');
  //subscriber.next(42);
  //subscriber.error("Error");
  //subscriber.next(42);
});
 
const subscription1 = foo.subscribe(x => {
  console.log(x);
},
err => console.log(err));
const subscription2  = foo.subscribe(y => {
  console.log(y);
});

console.log("End Complete");
// syn vs async