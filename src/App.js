import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
//import './App.css';

const  defaultTodos = [
  {text: 'Cortar cebolla', Completed: true },
  {text: 'Tomar el curso de intro a react', Completed: false },
  {text: 'Llorar con la llorona', Completed: false },
  {text: 'Lalala', Completed: true },
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue,setSearchValue] = React.useState('');
  const CompletedTodos = todos.filter(todo => !!todo.Completed).length;
  const totalTodos = todos.length; 


  return (

     <React.Fragment>

       <TodoCounter 
       total={ totalTodos }
       Completed={ CompletedTodos }
       />
       

       <TodoSearch
       searchValue = { searchValue }
       setSearchValue = { setSearchValue }
       />
       

       <TodoList>
        {todos.map(todo => (
       <TodoItem  
       key={ todo.text } 
       text={ todo.text }
       Completed={todo.Completed}
       />
       ))
        
       }
      </TodoList>

      <CreateTodoButton />
      

    </React.Fragment>


  );
}

export default App;
