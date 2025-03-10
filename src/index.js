import createProject from './project';
import styles from './styles.css';
import { createTodo, deleteTodo, toggleExpandible } from './todos';

window.deleteTodo = deleteTodo;
window.toggleExpandible = toggleExpandible;


const createTodoButton = document.querySelector('form button');
console.log(createTodoButton);

const createProjectButton = document.querySelector('#new-project button');

createTodoButton.addEventListener('click', createTodo);
createProjectButton.addEventListener('click', createProject)
console.log('Hello World');