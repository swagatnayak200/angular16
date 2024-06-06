package com.cglia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cglia.model.Student;
import com.cglia.service.Istudentservice;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/student")
public class StudentController {

	
	@Autowired
	private Istudentservice studentService;
	
	@GetMapping("/showstudent")
	public List<Student> students(){
		return studentService.getAllAtudents();	
	}
	

	@PostMapping("/add")
	public Student saveStudent(@RequestBody Student student) {
		return studentService.saveStudent(student);
	}

	@GetMapping("/getbyid") 
	public Student getbyId(@RequestParam("id") long Id) {
		return studentService.getbyId(Id);
	}
	
	
	@PutMapping("/update/{id}")
	public Student updatestudent(@PathVariable("id") long Id,@RequestBody Student student) {
		return studentService.updateStudent(Id, student);
	}
	
	@DeleteMapping("/delete/{id}")
	public Student removestudent(@PathVariable("id") long Id){
		return studentService.deleteStudentById(Id);
	}
	 
}
