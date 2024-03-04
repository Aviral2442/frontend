'use client';
import React, { useState } from 'react';


const Todolist = () => {

    const [ taskList, settaskList ] = useState([ ]); // a is used to read aur display value and b is used to update the values
    console.log(taskList);

    const addNewTask = (e) => {
        // console.log('Pressed');
    //  console.log(e.key); // it shows that which key is being pressed
      //  console.log(e.code); // it shows the key of the key you pressed

      if ( e.code === 'Enter'){
        console.log(e.target.value);
        
        const obj = { text : e.target.value, completed: false};
        
        settaskList( [ obj, ...taskList] );
        
        e.target.value = ' ';
      }
    }

    const deleteTask = (index) => {
        console.log(index);
        const temp = taskList;
        temp.splice(index, 1);
        settaskList( [...temp ]);
    }

    const completeTask = (index) => {
       
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        settaskList( [...temp ]);
        console.log(temp);
    }

  return (
    <div className='bg-primary-subtle vh-100'>
        <div className='container py-5' >

            <h1 className='display-3 fw-bold text-center' > Todo List </h1>

            <div className='card shadow' >
                <h6 className='text-center ' ></h6>
                <div className='card-header py-4' > 
                    <input onKeyDown={addNewTask} type="text" className='form-control w-75 mx-auto border-3 border-primary' placeholder='Enter New Task to add'/>
                </div>
                <div className='card-body' >
                    {
                        taskList.map(  (task, index) => { 
                            return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between align-items-center' >
                                <input type="checkbox" checked={task.completed} />
                                <p className='my-auto h4' >{task.text}</p>
                                { task.completed ? 
                                <span className='badge bg-success'>Completed</span> 
                                :
                                <span className='badge bg-danger'>Pending</span> }
                                <button onClick={ () => {deleteTask(index)} } className='btn btn-danger' >Delete</button>
                                <button onClick={ () => {completeTask(index)} } className='btn btn-success' >
                                    { task.completed ? 'Undo' : 'Completed Task' }
                                </button>
                                </div>
                         }  )
                    }
                </div>
            </div>


        </div>


    </div>
  )
}

export default Todolist