// initialize the count as 0
let count = 0

// grab the save element paragraph and store it in a variable called saveEl
// change the counter in the html to show new count
let saveElement = document.getElementById('save-element')
let counter = document.getElementById("counter")

// listen for clicks on increment button (onclick in index.html)
// increment the count variable when the button is clicked
let increment = () => {
  count += 1
  counter.textContent = count
}

// create a function to save & interact with save button in index.html
let save = () => {
  let counterString = count + " - "
  saveElement.textContent += counterString
  counter.textContent = 0
  count = 0
}

save()




