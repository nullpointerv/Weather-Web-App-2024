//selectors
const todo_Input=document.querySelector('.todo-input')
const todo_Button=document.querySelector('.todo-button')
const todo_List=document.querySelector('.todo-list')

//event-listeners
todo_Button.addEventListener('click',addTodo);
todo_List.addEventListener('click', deleteCheck);




//functions

function addTodo(event){
    event.preventDefault();   
//to-do div 
const todo_Div=document.createElement("div");
todo_Div.classList.add("todo");
//create li
const newTodo=document.createElement('li');
newTodo.innerText=todo_Input.value;
newTodo.classList.add('todo-item');
todo_Div.appendChild(newTodo);
//check and delete button
const complete_Button=document.createElement('button');
complete_Button.innerHTML='<i class="fa fa-check"></i>';
complete_Button.classList.add("complete-btn");
todo_Div.appendChild(complete_Button);

const delete_Button=document.createElement('button');
delete_Button.innerHTML='<i class="fa fa-trash"></i>';
delete_Button.classList.add("delete-btn");
todo_Div.appendChild(delete_Button);
//append to the list 
todo_List.appendChild(todo_Div);
//to delete input value after type in the form
todo_Input.value=" ";

} 



function deleteCheck(e) {
    const item = e.target;
// console.log(e.target);
    if (item.classList[0]==="delete-btn"){
      const  todo = item.parentElement;
      todo.remove();
    }
    if(item.classList[0]==="complete-btn"){
        const  todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}
