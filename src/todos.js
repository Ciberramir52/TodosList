export function createTodo () {
    const inputs = document.querySelectorAll('form input');
    const selects = document.querySelectorAll('form select');
    const todosContainer = document.querySelector(`[data-id=${selects[1].value.replace(' ', '-')}] .todos-container`);
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const title = document.createElement('h4');
    title.innerText = inputs[0].value;
    todo.appendChild(title);
    const description = document.createElement('p');
    description.innerText = inputs[1].value;
    todo.appendChild(description);
    const expandible = document.createElement('div');
    expandible.classList.add('expandible', 'hide');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date';
    expandible.appendChild(dueDateLabel);
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.value = inputs[2].value;
    expandible.appendChild(dueDate);
    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority';
    expandible.appendChild(priorityLabel);
    const priority = document.createElement('select');
    const priorityOptions = ['High', 'Medium', 'Low'];
    priorityOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.innerText = option;
        priority.appendChild(opt);
    })
    priority.value = selects[0].value;
    expandible.appendChild(priority);
    const completedLabel = document.createElement('label');
    completedLabel.innerText = 'Completed';
    const completed = document.createElement('input');
    completed.type = 'checkbox';
    completedLabel.appendChild(completed);
    expandible.appendChild(completedLabel);
    todo.appendChild(expandible);
    console.log(expandible)
    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.innerText = 'Delete Todo';
    deleteTodoButton.addEventListener('click', deleteTodo);
    todo.appendChild(deleteTodoButton);
    const toggleContent = document.createElement('button');
    toggleContent.innerText = 'v Show';
    toggleContent.classList.add('toggle-content');
    toggleContent.addEventListener('click', toggleExpandible);
    todo.appendChild(toggleContent);
    todosContainer.appendChild(todo);
    // category.appendChild(todo);
}

export function deleteTodo (e) {
    e.currentTarget.parentNode.remove();
}

export function toggleExpandible (e) {
    const parentNode = e.currentTarget.parentNode;
    const children = parentNode.children;
    for (const node of children) {
        if (node.classList.contains('expandible')) {
            console.log(node.classList)
            node.classList.toggle('hide');
        }
    }
}