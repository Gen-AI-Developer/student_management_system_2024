import inquirer from "inquirer";

type StudentData = {
    name: string;
    age: number;
    major: string;
    gpa: number;
    email: string;
    balance?: number;
    courses?: string[];
  };
  
  class Student {
    // Private field
    #students: Map<string, StudentData>;
  
    constructor() {
      this.#students = new Map<string, StudentData>();
    }
  
    // Method to add a student
    addStudent(student_id: string, studentData: StudentData): void {
      if (this.#students.has(student_id)) {
        throw new Error(`Student with ID ${student_id} already exists.`);
      }
      // Ensure balance and courses are initialized
      this.#students.set(student_id, { ...studentData, balance: 0, courses: [] });
    }
  
    // Method to get a student's data by ID
    getStudent(student_id: string): StudentData | null {
      return this.#students.get(student_id) || null;
    }
  
    // Method to delete a student by ID
    deleteStudent(student_id: string): void {
      if (!this.#students.has(student_id)) {
        throw new Error(`Student with ID ${student_id} does not exist.`);
      }
      this.#students.delete(student_id);
    }
  
    // Method to update a student's data
    updateStudent(student_id: string, newStudentData: Partial<StudentData>): void {
      if (!this.#students.has(student_id)) {
        throw new Error(`Student with ID ${student_id} does not exist.`);
      }
      const student = this.#students.get(student_id)!;
      this.#students.set(student_id, { ...student, ...newStudentData });
    }
  
    // Method to get all students
    getAllStudents(): [string, StudentData][] {
      return Array.from(this.#students.entries());
    }
  
    // Method to add balance to a student
    addBalance(student_id: string, amount: number): void {
      if (!this.#students.has(student_id)) {
        throw new Error(`Student with ID ${student_id} does not exist.`);
      }
      const student = this.#students.get(student_id)!;
      student.balance! += amount;
      this.#students.set(student_id, student);
    }
  
    // Method to assign a course to a student
    assignCourse(student_id: string, course: string): void {
      if (!this.#students.has(student_id)) {
        throw new Error(`Student with ID ${student_id} does not exist.`);
      }
      const student = this.#students.get(student_id)!;
      student.courses!.push(course);
      this.#students.set(student_id, student);
    }
  }
  
//   // Example usage
//   const studentClass = new Student();
  
//   const student1: StudentData = {
//     name: 'John Doe',
//     age: 20,
//     major: 'Computer Science',
//     gpa: 3.8,
//     email: 'john.doe@example.com'
//   };
  
//   const student2: StudentData = {
//     name: 'Jane Smith',
//     age: 22,
//     major: 'Mathematics',
//     gpa: 3.9,
//     email: 'jane.smith@example.com'
//   };
  
//   studentClass.addStudent('123', student1);
//   studentClass.addStudent('124', student2);
  
//   console.log(studentClass.getStudent('123'));
//   // Output: { name: 'John Doe', age: 20, major: 'Computer Science', gpa: 3.8, email: 'john.doe@example.com', balance: 0, courses: [] }
  
//   studentClass.addBalance('123', 100);
//   studentClass.assignCourse('123', 'Algorithms');
  
//   console.log(studentClass.getStudent('123'));
//   // Output: { name: 'John Doe', age: 20, major: 'Computer Science', gpa: 3.8, email: 'john.doe@example.com', balance: 100, courses: ['Algorithms'] }
  
//   console.log(studentClass.getAllStudents());
//   // Output: 
//   // [
//   //   ['123', { name: 'John Doe', age: 20, major: 'Computer Science', gpa: 3.8, email: 'john.doe@example.com', balance: 100, courses: ['Algorithms'] }],
//   //   ['124', { name: 'Jane Smith', age: 22, major: 'Mathematics', gpa: 3.9, email: 'jane.smith@example.com', balance: 0, courses: [] }]
//   // ]
  
async function main() {
    const studentClass = new Student();

    const studentManagementSystem = await inquirer.prompt([
        {
            type: 'list',
            name: 'student_menu',
            choices: [
                'View All Students',
                'Add  Students',
                'Del  Student',
                'Add Std Balance',
                'Remove Std Balance',
                'Assign Courses',
                'Exit  SMS',
            ]
        }
    ])
}