const tasklist = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
//variaveis para criar a logica da lista 

function addTask() { //funçao de criar a tarefa
    const taskText = taskInput.value.trim(); 
if (taskText !== "") { 
    const maxText = taskText.substring(0, 35); //const para determinar o numero maximo de caracteres
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${maxText}</span>
    <button class="editButton" onClick="editTask(this)">Editar</button>
    <button class="deleteButton" onClick="deleteTask(this)">Remover</button>  
      `;
      tasklist.appendChild(li);
      taskInput.value = "";
   }
}
function editTask(button){ //função para editar a tarefa
const li = button.parentElement;  
const span = li.querySelector("span"); //selecionar a tarefa que esta dentro do span
const newText = prompt("Editar tarefa:", span.textContent); //usar o alerta do navegador para mudar o nome da tarefa
if (newText !== null && newText.trim() !== "")//condiçao para que se o novo texto for existente e se nao tiver espaço em branco pegar o span e substituir pelo novo texto
 span.textContent = newText.trim();
}
function deleteTask(button) {
    const li = button.parentElement;
    tasklist.removeChild(li);
}