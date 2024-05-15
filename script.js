let number = window.document.getElementById('number')
let list = window.document.getElementById('list')
let res = window.document.getElementById('res')
let values =[]
  
//Add function
function add(){
  if(!isNaN(number.value) && number.value >= 1 && number.value <= 100) {
    if (!values.includes(Number(number.value))) {
      values.push (Number(number.value));
      list.innerHTML += `<option value= "${number.value}"> Value ${number.value} added </option>`;
      res.innerHTML = '';
    } else {
      alert("[ERROR] Value already in the list")
    }
  } else {
    alert("[ERROR] Invalid value");
  }
  number.value = ""
  number.focus()
}

//Verify function
function verify(){
  if(values.length == 0){
    alert("[ERROR] Please, first add values!")
  } else {
  res.innerHTML = `<p>In total there are ${values.length} numbers</p>`
  
  let highest = Math.max(...values)
  let lowest = Math.min(...values)
  res.innerHTML += `<p>The highest value is ${highest}</p>`
  
  res.innerHTML += `<p>The lowest value is ${lowest}</p>`
  
  
  let sum = 0;
  for (let i = 0; i < values.length; i++){
    sum += values[i];
  }
  res.innerHTML += `<p>The sum of values is ${sum}</p>`
  
  let average = sum/values.length
  res.innerHTML += `<p>The average of values is ${average.toFixed(2)}</p>`
}

}

//Reset function
function reset(){
  list.innerHTML = ""
  res.innerHTML = ""
  values = []
}
