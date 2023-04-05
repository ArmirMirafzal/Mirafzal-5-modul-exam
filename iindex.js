const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
// const list_el = localStorage.getItem("to-do-list : histories") ? JSON.parse(localStorage.getItem("to-do-list : histories")) : document.querySelector("#tasks");



function setHistories(histories) {
	localStorage.setItem("to-do-list : histories", JSON.stringify(histories));
}

function renderTask() {
  const task = input.value;
  const taskEl = document.createElement("div");

  taskEl.classList.add("task");

  // saveLocalTodos(input.value);

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  taskEl.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  
  task_content_el.appendChild(task_input_el);

  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  const task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerText = "Edit";

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerText = "Delete";

  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);

  taskEl.appendChild(task_actions_el);

  list_el.appendChild(taskEl);

  setHistories(list_el);

  input.value = "";

  task_edit_el.addEventListener("click", (e) => {
    if (task_edit_el.innerText.toLowerCase() == "edit") {
      task_edit_el.innerText = "Save";
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
    } else {
      task_edit_el.innerText = "Edit";
      task_input_el.setAttribute("readonly", "readonly");
    }
  });

  task_delete_el.addEventListener("click", (e) => {
    list_el.removeChild(taskEl);
  });
}


/* ----------------- */
window.addEventListener("load", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderTask();
  });
});
