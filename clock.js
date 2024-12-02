  
  const backgroundContainer = document.createElement("div");
  backgroundContainer.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #5F9EA0; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  padding: 0 10px;
  box-sizing: border-box; 
`;

  document.body.appendChild(backgroundContainer);
  const dateOnly= document.createElement('p');
  const Timeonly=document.createElement('p');
  const heading=document.createElement('h4');
  heading.innerHTML="Digital Clock";




   
  function TimeDigital (){
    popupContainer.appendChild(heading);

    let Time= new Date();

    dateOnly.innerHTML= 'Date: '+Time.toDateString();
    // console.log(dateOnly);
      popupContainer.appendChild(dateOnly);
      let timeonly=new Date();
      Timeonly.innerHTML='Time : '+timeonly.toLocaleTimeString();
      popupContainer.appendChild(Timeonly);
      

  }
  document.body.appendChild(backgroundContainer);
  
  
    const popupContainer = document.createElement("div");
    popupContainer.style.cssText = `
    position: fixed;
    top:0px;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    top: 2%; 
    left: 50%;
    transform: translateX(-50%);
    width: 90%; 
    max-width: 400px; 
    box-sizing: border-box;
`;

    document.body.appendChild(popupContainer);

setInterval(TimeDigital,1000)

//  function to create counter;

const popupContainer2 = document.createElement("div");
popupContainer2.style.cssText = `


position: fixed;
background-color: white;
border: 2px solid black;
border-radius: 10px;
padding: 20px;
text-align: center;
font-family: Arial, sans-serif;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
top: 30%; 
left: 50%;
transform: translateX(-50%);
width: 90%; 
max-width: 400px; 
box-sizing: border-box;
`;

document.body.appendChild(popupContainer2);
const heading2=document.createElement('h4');
heading2.innerHTML="stop watch";
popupContainer2.appendChild(heading2)


const stopwatch = document.createElement("div");
const hourBox = document.createElement("p");
hourBox.innerHTML = "00 :";
const minuteBox = document.createElement("p");
minuteBox.innerHTML = "00 :";
const secondBox = document.createElement("p");
secondBox.innerHTML = "00 :";
const miliSecons = document.createElement("p");
miliSecons.innerHTML = "00 ms";


stopwatch.appendChild(hourBox);
stopwatch.appendChild(minuteBox);
stopwatch.appendChild(secondBox);
stopwatch.appendChild(miliSecons);


stopwatch.style.cssText = `
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
`;


popupContainer2.appendChild(stopwatch);


let miliCount = 0;
let second = 0;
let minute = 0;
let hour = 0;

function miliSeconsChange() {
  
    miliCount++;

   
    if (miliCount === 100) { 
        miliCount = 0;
        second++;
    }

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

   
    miliSecons.innerHTML = miliCount.toString().padStart(2, '0') + " ms";
    secondBox.innerHTML = second.toString().padStart(2, '0') + " :";
    minuteBox.innerHTML = minute.toString().padStart(2, '0') + " :";
    hourBox.innerHTML = hour.toString().padStart(2, '0');
}


const buttonBox=document.createElement('div');

const ButtonReset= document.createElement('button')
buttonBox.append(ButtonReset);
ButtonReset.innerHTML='reset';
ButtonReset.addEventListener('click',(e)=>{

location.reload();


})


popupContainer2.appendChild(buttonBox);


const stopButton=document.createElement('button');
stopButton.innerHTML='Start';
buttonBox.append(stopButton);
let running=false;
let  intervalID;



stopButton.addEventListener('click',  ()=>{
    if(!running){
        stopButton.innerHTML='stop';
        intervalID = setInterval(miliSeconsChange,10)
  
        running=true;

    }
    
    else{
        stopButton.innerHTML = 'Start';
        clearInterval(intervalID); 
        running = false;

        }
    

})


const lap=document.createElement('button');

lap.innerHTML='Lap';




buttonBox.append(lap);

const snapshotContainer = document.createElement('div');
snapshotContainer.style.cssText = `
    margin-top: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #f9f9f9;
    max-height: 200px;
    overflow-y: auto;
`;

popupContainer2.appendChild(snapshotContainer);
function takeSnapshot() {

    const obj = {
        hour: hour,
        minute: minute,
        second: second,
        milisec: miliCount
    };

  
    const snapDiv = document.createElement('p');
    snapDiv.innerHTML = `
        Lap Time: 
        ${obj.hour.toString().padStart(2, '0')} :
        ${obj.minute.toString().padStart(2, '0')} :
        ${obj.second.toString().padStart(2, '0')} :
        ${obj.milisec.toString().padStart(2, '0')}
    `;


    snapshotContainer.appendChild(snapDiv);

  
    return obj;
}

lap.addEventListener('click', () => {
    const snapshot = takeSnapshot();
    console.log('Lap snapshot:', snapshot); 
});




















