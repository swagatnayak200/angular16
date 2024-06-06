package com.cglia.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import com.cglia.model.Student;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Slf4j
@Component
public class AspectInterceptor {
	
	@Pointcut("execution(* com.cglia.controller.*.*(..))")
	public void loggingpointcut() {}
	
	@Before("loggingpointcut()")
	public void before(JoinPoint joinpoint) {
		log.info("Before method invoked:"+joinpoint.getSignature());
	}
	
	@After("loggingpointcut()")
	public void after(JoinPoint joinpoint) {
		log.info("Before method invoked:"+joinpoint.getSignature());
	}
	
	@AfterReturning(value="execution(* com.cglia.controller.*.*(..))", returning ="student")
	public void after(JoinPoint joinpoint, Student student) {
		log.info("After method invoked:"+student);
	}
	
	@AfterThrowing(value="execution(* com.cglia.controller.*.*(..))", throwing = "e")
	public void after(JoinPoint joinpoint, Exception e) {
		log.info("After method invoked:"+e.getMessage());
		
	}

}
