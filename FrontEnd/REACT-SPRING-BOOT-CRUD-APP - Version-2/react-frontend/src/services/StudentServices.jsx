import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students"

class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentById(id){
        return axios.get(STUDENT_API_BASE_URL+"/"+id);
    }
    updateStudent(student,id){
        return axios.put(STUDENT_API_BASE_URL+"/"+ id, student);
    }
    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL+"/"+id);
    }
    deleteStudentAll(){
        return axios.delete(STUDENT_API_BASE_URL);
    }
}

export default new StudentService()