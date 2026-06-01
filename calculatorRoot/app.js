const inputVal = document.querySelector("#fromInput");
const selectFrom = document.querySelector("#selectFrom");
const selectTo = document.querySelector("#selectTo");
const btn = document.querySelector("#convert");
const inputNum = document.querySelector("#fromInput");
const outputNum = document.querySelector("#toOutput");
let toConvert = 1;

for (let i in countryList) {
    let optionfrom = new Option(countryList[i], i);
    let optionto = new Option(countryList[i], i);
    selectFrom.add(optionfrom);
    selectTo.add(optionto);
}

inputNum.addEventListener('input', () => {
    toConvert = inputNum.value;
});


let fromCode;
let toCode;

selectFrom.addEventListener("change", (evt) => {
    fromCode = evt.target.value
})

selectTo.addEventListener("change", (evt1) => {
    toCode = evt1.target.value
})

let URL = `https://api.frankfurter.dev/v2/rate/${fromCode}/${toCode}`;

async function rate(){
    console.log("Getting data");
    let response = await fetch(URL);
    let data = await response.json();
    outputNum.value = Number(toConvert) * data.rate;
    console.log(data.rate);
    }

// {
//   "date": "2026-06-01",
//   "base": "USD",
//   "quote": "INR",
//   "rate": 83.45
// }

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    rate();
    
});

