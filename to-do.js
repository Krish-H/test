
let todo_text = document.getElementById("todo-text");
let todo_list = document.getElementById("todo-list")
let checked = document.getElementsByClassName("checked")
checked.addeve

function addtsk(){
     if(todo_text.value === ''){
        alert("please enter something");
     }
     else{
        let li = document.createElement("li");
        li.innerText = todo_text.value;
        todo_list.appendChild(li);
        let span =document.createElement("span");
        span.innerText ="\u00d7";
        li.appendChild(span)
       
     }
     todo_text.value = '';
     save();
}
todo_list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()
    }
},false);
function save(){
    localStorage.setItem("save",todo_list.innerHTML)
}
function get(){
  todo_list.innerHTML = localStorage.getItem("save")
}
get()
