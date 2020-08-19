/* NewsPaper Analogy */

import { CustomObservable } from "./observerPattern";

let newsPaper = new CustomObservable();

const hindustanTime = (news) => { console.log(`%c HindustanTimes \n\n\n ${news}`,"color: red;font-style:cursive;padding:1px")};

const theHindu = (news) => { console.log(`%cThe Hindu \n\n\n${news}`,"color: black;font-weight: bold;padding:1px")};

// newsPaper.subscribe(hindustanTime);
// newsPaper.subscribe(theHindu);

newsPaper.next("india Win the all world cup in all sports of the word");

(() =>{
  let hindustanTimesButton = document.createElement('button');
  hindustanTimesButton.innerHTML = 'HindustanTimes';
  hindustanTimesButton.style.margin = '10px';
  hindustanTimesButton.onclick = () => {newsPaper.subscribe(hindustanTime);};

  let hinduButton = document.createElement('button');
  hinduButton.innerHTML = 'The Hindu';
  hinduButton.onclick = () => {newsPaper.subscribe(theHindu);};

  let unSubscribehindustanTimes = document.createElement('button');
  unSubscribehindustanTimes.innerHTML = 'UnSubscribe HindustanTimes';
  unSubscribehindustanTimes.style.margin = '10px';
  unSubscribehindustanTimes.onclick = () => {newsPaper.unsubscribe(hindustanTime);};

  let unSubscribeHindu = document.createElement('button');
  unSubscribeHindu.innerHTML = 'UnSubscribe The Hindu';
  unSubscribeHindu.onclick = () => {newsPaper.unsubscribe(theHindu);};

  let inputText = document.createElement('input');
//  inputText.innerHTML = 'Send News';
  inputText.type = "text";
  inputText.onchange = (event: any) => {newsPaper.next(event.target.value)};

  document.body.appendChild(hindustanTimesButton);
  document.body.appendChild(hinduButton);
  document.body.appendChild(unSubscribehindustanTimes);
  document.body.appendChild(unSubscribeHindu);
   document.body.appendChild(inputText);
})();

