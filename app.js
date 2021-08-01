let list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) {
  let closeSpan = document.createElement("span");
   txt = document.createTextNode("\u00D7");
  closeSpan.className = "close";
  closeSpan.appendChild(txt);
  list[i].appendChild(closeSpan);
}

 
let close = document.getElementsByClassName("close");

for ( let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


let myList = document.querySelector('ul');
myList.addEventListener('click', function(even) {
  if (even.target.tagName === 'LI') {
    even.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    let span = document.createElement("SPAN");
    txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
 
} 


