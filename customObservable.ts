import { CustomObservable } from "./observerPattern";

// Add burger
const burgerPipeLine = new CustomObservable();
function addBurger(){
  const burger =  document.querySelector('.burger-body');
  burgerPipeLine.subscribe((slice: string) => {
    burger.appendChild(addSlice(slice));
  });
}

function addSlice(item){
  let tomato = document.createElement('div');
  tomato.className = item;
  return tomato;
}
//to be commented
addBurger();
burgerPipeLine.next('tomato');
burgerPipeLine.next('lettuce');
burgerPipeLine.next('cheese');
burgerPipeLine.next('bun-2');
//============

// (() => {
//   let startButton = document.createElement('button');
//   startButton.innerHTML = 'start';
//   startButton.style.margin = '10px';
//   startButton.style.backgroundColor = "#fff";
//   startButton.onclick = addBurger;

//   let tomatoButton = document.createElement('button');
//   tomatoButton.innerHTML = 'tomato';
//   tomatoButton.style.margin = '10px';
//   tomatoButton.style.backgroundColor = "#fff";
//   tomatoButton.onclick = () => {burgerPipeLine.next('btn-tomato')}

//   let letticeButton = document.createElement('button');
//   letticeButton.innerHTML = 'lettice';
//   letticeButton.style.margin = '10px';
//   letticeButton.style.backgroundColor = "#fff";
//   letticeButton.onclick = () => {burgerPipeLine.next('btn-meat')}

//   let cheeseButton = document.createElement('button');
//   cheeseButton.innerHTML = 'cheese';
//   cheeseButton.style.margin = '10px';
//   cheeseButton.style.backgroundColor = "#fff";
//   cheeseButton.onclick = () => {burgerPipeLine.next('btn-cheese')}

//   let lastBunButton = document.createElement('button');
//   lastBunButton.innerHTML = 'LastBun';
//   lastBunButton.style.margin = '10px';
//   lastBunButton.style.backgroundColor = "#fff";
//   lastBunButton.onclick = () => {burgerPipeLine.next('btn-bun-2 ')};

  

//    document.body.appendChild(startButton);
//    document.body.appendChild(tomatoButton);
//    document.body.appendChild(letticeButton);
//    document.body.appendChild(cheeseButton);
//    document.body.appendChild(lastBunButton);

// })();