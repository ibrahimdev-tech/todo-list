
function AddTask(){

    let Newtask=document.createElement('li');
    let tasklist=document.getElementById("tasklist")
    tasklist.appendChild(Newtask);
    Newtask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value=" ";

deleteTask(Newtask)

}
function deleteTask(Newtask){
let deletebtn=document.createElement('button')
deletebtn.textContent="cut"
Newtask.appendChild(deletebtn)
deletebtn.onclick=function(){
    Newtask.remove()
}
}