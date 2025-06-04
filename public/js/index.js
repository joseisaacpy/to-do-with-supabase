// elemento de lista de tarefas
let ulElement = document.getElementById("tasks");

// função de pegar as tarefas
async function getTasks() {
  const request = await fetch("/api/todos");
  const data = await request.json();
  // para cada tarefa cria um elemento li
  data.forEach((taks) => {
    let liElement = document.createElement("li");
    liElement.innerText = taks.title;
    ulElement.appendChild(liElement);
  });
}
// quando o DOM for carregado chama a funcao
document.addEventListener("DOMContentLoaded", getTasks);
