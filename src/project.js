export default function createProject () {
    const name = document.querySelector('#new-project input').value;
    const projectSelect = document.querySelector('#todo-project');
    const projectOption = document.createElement('option');
    projectOption.value = name;
    projectOption.innerText = name;
    projectSelect.appendChild(projectOption);
    const projectsContainer = document.querySelector('#projects-container');
    const category = document.createElement('div');
    category.dataset.id = name.replace(' ', '-');
    category.classList.add('project');
    const categoryTitle = document.createElement('h3');
    categoryTitle.innerText = name;
    category.appendChild(categoryTitle);
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');
    category.appendChild(todosContainer);
    projectsContainer.appendChild(category);
}