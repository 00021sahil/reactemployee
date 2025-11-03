import React, { useState } from 'react'

function ToDo() {

    const [employee , setEmployee] = useState ({
        name: "",
        age: 0,
        salary:0,
        department: "",
    });

    const [employeeArray , setEmployeeArray] = useState([]);

    const inputHandler = (e)=>{
        const{name,value}= e.target;
        setEmployee((old)=> ({...old,[name]: value }));
    };

    const addEmployee = ()=> {
        setEmployeeArray((old)=>[...old,employee]);
        reset();
    };

    const reset =()=> {
        setEmployee({
            name:"",
            age:0,
            salary:0,
            department:"",
        });
    };

    const deleteEmployee = (index)=>{
        const updatedArray = employeeArray.filter((emp,i)=> i!=index);
        setEmployeeArray(updatedArray);
        alert("Deleted !");
    };

    const showEmployee = (index)=> {
        const emp = employeeArray.find((emp,i)=> i=== index);
        setEmployee(emp);
    };
  return (
    <div>
      <form >
        <label>Name : </label> &nbsp;
        <input type="text" name='name' value={employee.name} onChange={inputHandler} />
        <br /><br />
        <label>Age : </label> &nbsp;
        <input type="number" name='age' value={employee.age} onChange={inputHandler} />
        <br /><br />
        <label>Salary : </label> &nbsp;
        <input type="number" name='salary' value={employee.salary} onChange={inputHandler} />
        <br /><br />
        <label>Department : </label> &nbsp;
        <select name="department" value={employee.department} onChange={inputHandler}>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
        </select>
        <br /><br />
        <button onClick={addEmployee} type='button'>ADD</button>
      </form>
      <hr /><hr />
      <table border={1}>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                employeeArray.map((emp,index)=>(
                    <tr>
                        <td>{index}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.department}</td>
                        <td><button onClick={()=> deleteEmployee(index)}> Delete </button> | 
                            <button onClick={()=> showEmployee(index)}> Show</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
                       
    </div>
  )
}

export default ToDo
