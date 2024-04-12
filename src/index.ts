#!/usr/bin/env node
// Define a Student interface to represent student information
interface Student {
    id: string;
    name: string;
    courses: string[];
    balance: number;
}

// Define a Course interface to represent course information
interface Course {
    id: string;
    name: string;
    creditHours: number;
    tuitionFee: number;
}

// Define a class for managing students and courses
class StudentManagementSystem {
    students: { [id: string]: Student };
    courses: { [id: string]: Course };

    constructor() {
        this.students = {};
        this.courses = {};
    }

    // Method to add a new student
    addStudent(id: string, name: string): void {
        if (this.students[id]) {
            console.log(`Student with ID ${id} already exists.`);
            return;
        }
        this.students[id] = {
            id,
            name,
            courses: [],
            balance: 0
        };
        console.log(`Student ${name} added with ID ${id}.`);
    }

    // Method to enroll a student in a course
    enrollStudent(studentId: string, courseId: string): void {
        const student = this.students[studentId];
        const course = this.courses[courseId];
        if (!student) {
            console.log(`Student with ID ${studentId} not found.`);
            return;
        }
        if (!course) {
            console.log(`Course with ID ${courseId} not found.`);
            return;
        }
        student.courses.push(course.name);
        student.balance += course.tuitionFee;
        console.log(`Student ${student.name} enrolled in course ${course.name}.`);
    }

    // Method to display student details
    displayStudentDetails(studentId: string): void {
        const student = this.students[studentId];
        if (!student) {
            console.log(`Student with ID ${studentId} not found.`);
            return;
        }
        console.log(`Student ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Courses Enrolled: ${student.courses.join(', ')}`);
        console.log(`Balance: ${student.balance}`);
    }
}

// Example usage
const system = new StudentManagementSystem();

// Add courses
system.courses['C001'] = { id: 'C001', name: 'Mathematics', creditHours: 3, tuitionFee: 100 };
system.courses['C002'] = { id: 'C002', name: 'Physics', creditHours: 4, tuitionFee: 120 };

// Add students
system.addStudent('S001', 'John Doe');
system.addStudent('S002', 'Jane Smith');

// Enroll students in courses
system.enrollStudent('S001', 'C001');
system.enrollStudent('S002', 'C002');

// Display student details
system.displayStudentDetails('S001');
system.displayStudentDetails('S002');


// interface StudentStructure {
//     name: string;
//     gender: "Male" | "Female";
//     fatherName: string;
//     id: number;
//     Semester: string;
//     Department: string;
// }

// class ManagementSystem implements StudentStructure {
//     name: string;
//     gender: "Male" | "Female";
//     fatherName: string;
//     id: number;
//     Semester: string;
//     Department: string;

//     constructor(name: string, gender: "Male" | "Female", fatherName: string, id: number, Semester: string, Department: string) {
//         this.name = name;
//         this.gender = gender;
//         this.fatherName = fatherName;
//         this.id = id;
//         this.Semester = Semester;
//         this.Department = Department;
//     }

// }
