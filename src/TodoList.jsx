import React from 'react';
import './TodoList.css';



function TodoList ( props ) {
    return (
       <ul>
        <section>
          {props.children}
        </section>
       </ul>
    )
}


export { TodoList };