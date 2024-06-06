package com.cglia.repository;

import org.springframework.data.repository.CrudRepository;

import com.cglia.model.Student;

public interface Studentrepository extends CrudRepository<Student, Long>{
	//Optional<Student> findById(long Id);

}
