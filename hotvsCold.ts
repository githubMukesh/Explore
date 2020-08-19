import { Observable } from 'rxjs';

 // Cold Observable 
 export const coldObservable = () => {
const foo = new Observable((subscriber) => {
  const response =  fetch('https://reqres.in/api/users/2');
  console.log('Calling from cold world');
  subscriber.next(response);
});
 
const subscription1 = foo.subscribe(async(response : Response)=> {
  console.log("subscribtion 1" ,await response);
});
const subscription2 = foo.subscribe(async(response : Response)=> {
  console.log("subscribtion 2" ,await response);
});
 }



// Hot Observable 
export const hotObservable = () => {

const response =  fetch('https://reqres.in/api/users/2');
const foo = new Observable((subscriber) => {
  console.log('Calling from hot world');
  subscriber.next(response);
});
 
const subscription1 = foo.subscribe(async(response : Response)=> {
  console.log("subscribtion 1" ,await response);
});
const subscription3 = foo.subscribe(async(response : Response)=> {
  console.log("subscribtion 2" ,await response);
});

}

hotObservable();
//coldObservable();