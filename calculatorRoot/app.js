const inputVal = document.querySelector("#fromInput");
const selectFrom = document.querySelector("#selectFrom");
const selectTo = document.querySelector("#selectTo");
const btn = document.querySelector("#convert");
const inputNum = document.querySelector("#fromInput");
const outputNum = document.querySelector("#toOutput");
const flagImageFrom = document.querySelector("#FlagImgFrom");
const flagImageTO = document.querySelector("#FlagImgTO");
let toConvert = 1;


const flagBaseUrl = "https://flagsapi.com";

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
    fromCode = evt.target.value;
    let index = selectFrom.selectedIndex;
    let countryName = selectFrom.options[index].text;
    console.log(countryName);
    flagImageFrom.innerHTML = `<img src="https://flagsapi.com/${countryName}/flat/64.png" class="UrlImg">`

})

selectTo.addEventListener("change", (evt1) => {
    toCode = evt1.target.value;
    let index = selectTo.selectedIndex;
    let countryName = selectTo.options[index].text;
    console.log(countryName);
    flagImageTO.innerHTML = `<img src="https://flagsapi.com/${countryName}/flat/64.png" class="UrlImg">`

})




async function rate(){
    console.log("Getting data");
    let URL = `https://api.frankfurter.dev/v2/rate/${fromCode}/${toCode}`;
    let response = await fetch(URL);
    let data = await response.json();
    let result = data.rate;
    outputNum.value = toConvert * result ;
    console.log(result);
    console.log(URL);
    }

// {
//   "date": "2026-06-01",
//   "base": "USD",
//   "quote": "INR",
//   "rate": 83.45
// }

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    toConvert = Number(toConvert);
    console.log(fromCode);
    console.log(typeof fromCode);
    console.log(toCode);
    console.log(typeof toCode);
    console.log(toConvert);
    console.log(typeof toConvert);

    rate();
    
});

