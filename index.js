
document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById('item').value;
    if(value) {
        addItemTodo(value);
        document.getElementById('item').value = ''
     }
})

function removeItem(){
    let item = this.parentNode.parentNode.parentNode;
    let parent = item.parentNode;
    if (window.confirm("Are you sure you want to delete this item?")) { 
    parent.removeChild(item)
    }

}

function taskCompleted(){
    let taskHeader =  document.getElementsByClassName("completed-header");
    taskHeader[0].style.display = "block";
    let list = document.getElementById('completed');
    let item = this.parentNode.parentNode.parentNode;
    let parent = item.parentNode;
    list.insertBefore(item, list.childNodes[0]);
    parent.removeChild(item);
}

function addItemTodo(text) {
    let taskHeader =  document.getElementsByClassName("task-header");
    taskHeader[0].style.display = "block";
     let list = document.getElementById('todo');
     let item = document.createElement('li');
     let itemContainer = document.createElement('div');
     itemContainer.innerText = text;
     let iconContainer = document.createElement('span');
     let iconDelete= document.createElement('i');
     iconDelete.classList.add('fa', 'fa-trash');
     iconDelete.addEventListener('click', removeItem);
     let iconCompleted = document.createElement('i');
     iconCompleted.classList.add('fa', 'fa-check-square');
     iconCompleted.addEventListener('click', taskCompleted);
     iconContainer.appendChild(iconDelete);
     iconContainer.appendChild(iconCompleted);
     itemContainer.appendChild(iconContainer);
     item.appendChild(itemContainer);
     list.insertBefore(item, list.childNodes[0])

}