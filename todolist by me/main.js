// basic styling
const todo=document.querySelector(".todo h3")
const todoList=document.querySelector(".todo")
todo.onclick=()=>{
    if(todo.style.textDecoration==="line-through"){
        todo.style.textDecoration="none"
    }
    else{
        todo.style.textDecoration="line-through"
    }
}
// add todos 
let todos=[]
const newTodoList=document.querySelector(".todolist")
const input=document.querySelector(".input")
const addTodo=document.querySelector(".fa-plus")
const btn=document.querySelector(".btn")
let counter=1
btn.innerHTML=`${counter} Todos left`
addTodo.onclick=()=>{
    counter+=1
    const div=document.createElement("div")
    div.style.cssText="width: 85%;display: flex;align-items: center;justify-content: space-between;background-color: white;border-radius: 2px;box-shadow: 1px 1px 1px rgba(0,0,0,.1);border: 1px solid rgba(0,0,0,.1);   height: 50px;margin-top: 10px;"
    const h3=document.createElement("h3")
    h3.style.cssText="padding-left: 10px;font-weight: 400;font-size: 22px;color: rgba(0,0,0,.4);text-decoration:none;"
    h3.innerHTML=input.value
    const i = document.createElement("i")
    i.className="fa-solid fa-trash"
    div.append(h3)
    i.style.cssText="height: 40px;width: 40px;background-color: rgb(253, 73, 45);color: white;font-size: 32px;display: flex;align-items: center;justify-content: center;border-radius: 2px;padding: 5px;position: absolute;right:7%;"
    div.append(i)
    newTodoList.append(div)
    h3.onclick=()=>{
        if(h3.style.textDecoration==="line-through"){
            h3.style.textDecoration="none"
        }
        else{
            h3.style.textDecoration="line-through"
        }
    }
    btn.innerHTML=`${counter} Todos left`
    i.onclick=()=>{
        div.style.display="none"
        counter-=1
        btn.innerHTML=`${counter} Todos left`
    }
    // clear all
    const clearAll = document.querySelector(".clear")
    clearAll.addEventListener("click",()=>{
        
    })
    // local storage
    todos.push(div)
}
// 
const trash=document.querySelector(".fa-trash")
trash.onclick=()=>{
    todoList.style.display="none"
    counter-=1
    btn.innerHTML=`${counter} Todos left`
}
// 
