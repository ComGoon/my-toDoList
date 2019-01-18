//style body element
document.querySelector("body").style.background = "gold";
document.querySelector("body").style.fontFamily = "sans-serif";

//style the header
var page = (document.querySelector("#page-banner").style.background =
  "goldenrod");
// var banner = document.querySelector('#page-banner');

const uli = document.querySelector("#uli");

uli.addEventListener("click", function(e) {
  //target means the particular delete buttom clieck amoung all of them
  if (e.target.className == "dlt") {
    e.target.parentElement.remove(e.target); //removing the particular item
  }
});

const addFrom = document.querySelector("#add-item");
//event listener on submit
addFrom.addEventListener("submit", function(e) {
  // e.preventDefault();
  const val = document.querySelector('#add-item input[type="text"]').value;
  e.preventDefault();
  //   console.log(isEmpty(val));
  console.log(typeof val);
    
  //trim() clears spaces before and after and element
  if (val.trim() !== "") { //no to add empty or solely space inputs 
    //checking for valid entry
    console.log(typeof val);
    //create element
    const li = document.createElement("li");
    const dltBtn = document.createElement("span");

    //attach val to li
    li.textContent = val;
    dltBtn.textContent = "delete";

    //appending
    li.appendChild(dltBtn);
    uli.appendChild(li);

    //styling using classes
    li.classList.add("list");
    dltBtn.classList.add("dlt");

    //cleaning up the input area
    document.querySelector('#add-item input[type="text"]').value = "";
  } else {
    console.log("your entery in empty!");
  }
});

//the checkBox
const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", function(e) {
  const newList = document.querySelector("#uli");
  console.log(newList);
  if (hideBox.checked) {
    console.log(hideBox.checked); //log true or ...
    newList.style.display = "none"; //no displying the items
  } else {
    newList.style.display = "initial"; //displaying the items
  }
});

//wanted to have the string 'Zero', instead of the number 0
if (document.querySelector("#counter #count").textContent == "0") {
  document.querySelector("#count").textContent = "Zero";
}

const counter = document.querySelector("#counter");

counter.addEventListener("click", function(e) {
  //case up is clicked
  if (e.target.id == "up") {
    //checking on the count
    if (document.querySelector("#counter #count").textContent == "Zero") {
      document.querySelector("#count").textContent = 0;
    }

    var numCountener = document.querySelector("#counter #count");
    var num = parseInt(document.querySelector("#counter #count").innerHTML);
    numCountener.textContent = num + 1; //increasing
  }

  //case down is clicked
  if (e.target.id == "down") {
    var numCountener = document.querySelector("#counter #count");
    var num = parseInt(document.querySelector("#counter #count").innerHTML);

    //returning to default => 'Zero'
    if (document.querySelector("#counter #count").textContent == 1) {
      document.querySelector("#count").textContent = "Zero";
    }
    //you wouldn't want to count to negetive numbers
    if (num > 1) {
      numCountener.textContent = num - 1; //decreasing
    }
  }
  //to prevent refreshing the page, by default buttons do
  e.preventDefault();
});

//the search area
const search = document.forms["search-item"].querySelector("input");
console.log(search); //just kidding

search.addEventListener("keyup", function(e) {
  const term = e.target.value;
  console.log(term);

  const items = document.querySelectorAll("li");
  // console.log(items[4].textContent);

  items.forEach(item => {
    // console.log(item.textContent);

    //in comparing strings, js is case sensitive.
    if (item.textContent.toLowerCase().indexOf(term) != -1) {
      console.log(item.textContent.toUpperCase()); //just kidding :)
      item.style.display = "block"; //displaying
    } else {
      item.style.display = "none"; //not displaying
    }
  });
});
// search.addEventListener()
// down.addEventListener('mousedown', function(e){
//     if(e.target.className == 'mousedown'){
//         e.preventDefault();
//     }
// })

// const uli = document.querySelectorAll('#uli .list ');

// console.log(Array.from(uli));

// uli.forEach(element => {
//     element.addEventListener('click', function(e){
//         console.log(e);

//         const li = e.target.parentElement;
//         li.remove(element);
//         // console.log(li);
//         // element.parentElement.remove(element.target);
//     });
// });

// var link = document.querySelector('a');
// console.log(link);

// link.addEventListener('click', function(e){
//     e.preventDefault();
// })

// Array.from(uli).forEach(element => {
//     console.log(element.textContent);
//     element.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         console.log(li);
//         li.parentElement.removeChild(li);
//     } );

// });
