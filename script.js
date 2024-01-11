const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("No task added");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",
    function(e){
        // console.log(e.target);
        // const H = e.target.
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();//parent element i.e. li will be removed that was added earlier
            saveData();
        }
    },false);

//function to save data in a local storage in browser
  function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
  } 
 
 //function to show the data stored in local storage 
  function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

  }

  showData();