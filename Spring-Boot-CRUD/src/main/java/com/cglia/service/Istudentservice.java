package com.cglia.service;

import java.util.List;

import com.cglia.model.Student;

public interface Istudentservice {
	Student saveStudent(Student student);
	Student getbyId(long Id);
	List<Student> getAllAtudents();
	Student updateStudent(long Id,Student student);
	Student deleteStudentById(long Id);

}
