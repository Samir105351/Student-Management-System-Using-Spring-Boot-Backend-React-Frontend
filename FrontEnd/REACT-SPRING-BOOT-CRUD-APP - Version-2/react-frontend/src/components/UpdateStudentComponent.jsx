import React, { Component } from 'react';
import StudentServices from '../services/StudentServices';

class UpdateStudentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            studentId:this.props.match.params.studentId,
            name:this.props.match.params.name,
            dept:this.props.match.params.dept
        }
        this.changeStudentIdHandler=this.changeStudentIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeDeptHandler=this.changeDeptHandler.bind(this);
        this.updateStudent=this.updateStudent.bind(this);
        this.cancel=this.cancel.bind(this);
    }

    componentDidMount(){
        StudentServices.getStudentById(this.state.id).then((res)=>{
            let student = res.data;
            this.setState({studentId: student.studentId,
                name: student.name,
                dept: student.dept
            });

        });
    }

    changeStudentIdHandler=(event)=>{
        this.setState({studentId: event.target.value});
    }

    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }

    changeDeptHandler=(event)=>{
        this.setState({dept: event.target.value});
    }

    updateStudent=(e)=>{
        e.preventDefault();
        let student={studentId: this.state.studentId, name: this.state.name, dept: this.state.dept}
        console.log('student=>'+JSON.stringify(student));
        StudentServices.updateStudent(student,this.state.id).then(res=>{
            this.props.history.push("/students");
        }); 
    }

    cancel(){
        this.props.history.push("/students/");
        window.location.reload();
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <br></br>
                            <h3 className='text-center'>Update Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>&nbsp;&nbsp;Student ID:</label>
                                        <input placeholder='Enter Student ID' name="studentId" className='form-control'
                                        value={this.state.studentId} onChange={this.changeStudentIdHandler}/>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label>&nbsp;&nbsp;Student Name:</label>
                                        <input placeholder='Enter Student Name' name="studentName" className='form-control'
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label>&nbsp;&nbsp;Student Dept:</label>
                                        <input placeholder='Enter Student Dept' name="studentId" className='form-control'
                                        value={this.state.dept} onChange={this.changeDeptHandler}/>
                                    </div>
                                    <br></br>
                                    <button className='btn btn-success' onClick={this.updateStudent}>Save</button>
                                    &nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={this.cancel} >Back</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;