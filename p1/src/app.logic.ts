import type {Todo} from './types';
import {generateId} from './utils/id';


/** Creates a new todo with a generated id and completed defaulting to false. */
export function createTodo(title: string): Todo {
  return {
    id: generateId(),
    title,
    completed: false
  };
}
/** Returns a new todos array with the matching todo's title replaced. */
export function updateTodo(todos: Todo[], id: string, title: string): Todo[] {
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

/** Returns a new todos array with the matching todo removed. */
export function deleteTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}


// export function toggleTodo(todo: Todo): Todo {
//   return {
//     ...todo,
//     completed: !todo.completed
//   };
// }

/** Returns a new todos array with the matching todo's completed status flipped. */
export function toggleTodo(todos: Todo[], id: string): Todo[] {
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