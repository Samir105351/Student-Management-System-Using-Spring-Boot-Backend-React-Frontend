package com.example.springbootbackend.controller;

import com.example.springbootbackend.model.Student;
import com.example.springbootbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.module.ResolutionException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class StudentController{
    @Autowired
    private StudentRepository studentRepository;
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student student=studentRepository.findById(id).orElseThrow(()->new ResolutionException("Student Not Found With id:"+id));
        return ResponseEntity.ok(student);
    }
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id,@RequestBody Student studentDetails){
        Student student=studentRepository.findById(id).orElseThrow(()->new ResolutionException("Student Not Found With id:"+id));
        student.setStudentId(studentDetails.getStudentId());
        student.setDept(studentDetails.getDept());
        student.setName(studentDetails.getName());
        Student updatedStudent=studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMapping(@PathVariable Long id){
        Student student=studentRepository.findById(id).orElseThrow(()->new ResolutionException("Student Not Found With id:"+id));
        studentRepository.delete(student);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @DeleteMapping("/students")
    public ResponseEntity<Map<String,Boolean>> deleteAll(){
        studentRepository.deleteAll();
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
