import type {Todo} from './types';
import {generateId} from './utils/id';


export function createTodo(title: string): Todo {
  return {
    id: generateId(),
    title,
    completed: false
  };
}
export function updateTodo(todos: Todo[],id:String,title: string): Todo[] {
return todos.map((todo) => {
        if (todo.id !== id){
            return todo;
        }
        return {
            ...todo,
            title  
        };
})


}

export function deleteTodo(todos: Todo[],id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}


// export function toggleTodo(todo: Todo): Todo {
//   return {
//     ...todo,
//     completed: !todo.completed
//   };
// }

export function toggleTodo(todos: Todo[],id: string): Todo[] {
  return todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    }
    return {
      ...todo,
      completed: !todo.completed
    };
  });
}