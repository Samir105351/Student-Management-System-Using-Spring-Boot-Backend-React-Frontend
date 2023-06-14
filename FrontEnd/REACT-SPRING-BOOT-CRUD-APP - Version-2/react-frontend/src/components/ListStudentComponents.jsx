import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class ListStudentComponents extends Component {
    constructor(props){
        super(props)
        this.state={
            students: []
        }
        this.addStudent=this.addStudent.bind(this)
        this.editStudent=this.editStudent.bind(this)
        this.deleteStudent=this.deleteStudent.bind(this)
        this.deleteAllStudent=this.deleteAllStudent.bind(this)
    }
    componentDidMount(){
        StudentServices.getStudents().then((res)=>
            this.setState({ students: res.data})
        );
    }

    addStudent(){
        this.props.history.push("/add-students/");
        window.location.reload();
    }
    
    editStudent(id){
        this.props.history.push("/update-students/"+id);
        window.location.reload();
    }

    deleteStudent(id){
        StudentServices.deleteStudent(id).then(res=>{
            this.setState({students: this.state.students.filter(student=>student.id!== id)})
        });
    }

    deleteAllStudent(){
        StudentServices.deleteStudentAll();
        this.props.history.push("/students/");
        window.location.reload();
    }
     
    render() {
        return (
            <div>
                <br></br>
                <div className='row'>
                <div class="col">
                <button className='btn btn-primary' onClick={this.addStudent}>Add Student</button>&nbsp;&nbsp;
                <button className='btn btn-danger' onClick={this.deleteAllStudent}>Delete All</button>
                </div>
                <div className='col-sm-3'>
                    <form className='d-flex'>
                        <input className='form-control me 2' type='search' placeholder='search'/>&nbsp;&nbsp;
                        <button className='btn btn-info'>Search</button>
                    </form>
                </div>
                </div>
                <h2 className='text-center'>Student List</h2>
                <br></br>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                         <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Student Dept</th>
                                <th>Actions</th>
                            </tr>
                         </thead>
                         <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.studentId}</td>
                                        <td>{student.name}</td>
                                        <td>{student.dept}</td>
                                        <td>
                                            <button onClick={()=>this.editStudent(student.id)} className='btn btn-info'>Update</button>&nbsp;&nbsp;
                                            <button onClick={()=>this.deleteStudent(student.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                         </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponents;