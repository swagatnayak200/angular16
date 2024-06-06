package com.cglia.service.imp;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cglia.model.Student;
import com.cglia.repository.Studentrepository;
import com.cglia.service.Istudentservice;

@Service
public class studentserviceimpl implements Istudentservice {
	
	private static final Logger logger = LoggerFactory.getLogger(studentserviceimpl.class);
	@Autowired
	private Studentrepository sturepository;

	@Override
	public Student saveStudent(Student student) {
		logger.info("Saving student:{}",student);
		try {
			Student savedStudent=sturepository.save(student);
			logger.debug("Student saved successfully:{}",savedStudent);
			return savedStudent;
		} catch (Exception e) {
			logger.error("Error in saving student:{}",e.getMessage());
			throw e;
		}
	}

	@Override
	public Student getbyId(long Id) {
		logger.info("Getting student by ID:{}",Id);
		return sturepository.findById(Id).orElseThrow();
	}

	@Override
	public List<Student> getAllAtudents() {
		logger.info("Getting all students");
		return (List<Student>) sturepository.findAll();
	}

	@Override
	public Student updateStudent(long Id, Student student) {
		logger.info("Updating student by id:{}",Id);
		Optional<Student> opt = sturepository.findById(Id);
		Student stu = null;
		if (opt.isPresent()) {
			stu = opt.get();
		}
		stu.setName(student.getName());
		stu.setEmail(student.getEmail());
		stu.setAge(student.getAge());
		stu.setPhone(student.getPhone());

		return sturepository.save(stu);
	}

	@Override
	public Student deleteStudentById(long Id) {
		logger.info("Deleting student by id:{}",Id);
		Student stu = getbyId(Id);
		try {
			sturepository.delete(stu);
			logger.debug("Student deleted successfully:{}",stu);
			return stu;
		} catch (Exception e) {
			logger.error("Error in deleting student:{}",e.getMessage());
			throw e;
		}
	}
}
