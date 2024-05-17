import inquirer from "inquirer";

class Student {
    // Private field
    #students;

    constructor() {
        // Initialize the private students map
        this.#students = new Map();
    }

    // Method to add a student
    addStudent(student_id: number, studentData: any) {
        if (this.#students.has(student_id)) {
            throw new Error(`Student with ID ${student_id} already exists.`);
        }
        this.#students.set(student_id, studentData);
    }

    // Method to get a student's data by ID
    getStudent(student_id: number) {
        return this.#students.get(student_id) || null;
    }

    // Method to delete a student by ID
    deleteStudent(student_id: number) {
        if (!this.#students.has(student_id)) {
            throw new Error(`Student with ID ${student_id} does not exist.`);
        }
        this.#students.delete(student_id);
    }

    // Method to update a student's data
    updateStudent(student_id: number, newStudentData: any) {
        if (!this.#students.has(student_id)) {
            throw new Error(`Student with ID ${student_id} does not exist.`);
        }
        this.#students.set(student_id, newStudentData);
    }

    // Method to get all students
    getAllStudents() {
        return Array.from(this.#students.entries());
    }
}

// Example usage
// studentClass.addStudent(123, { name: 'John Doe', age: 20, major: 'Computer Science' });
// studentClass.addStudent(124, { name: 'Jane Smith', age: 22, major: 'Mathematics' });

// console.log(studentClass.getStudent(123)); // { name: 'John Doe', age: 20, major: 'Computer Science' }
// console.log(studentClass.getAllStudents()); // [ ['123', { name: 'John Doe', age: 20, major: 'Computer Science' }], ['124', { name: 'Jane Smith', age: 22, major: 'Mathematics' }] ]

// studentClass.updateStudent(123, { name: 'John Doe', age: 21, major: 'Computer Science' });
// console.log(studentClass.getStudent(123)); // { name: 'John Doe', age: 21, major: 'Computer Science' }

// studentClass.deleteStudent(124);
// console.log(studentClass.getAllStudents()); // [ ['123', { name: 'John Doe', age: 21, major: 'Computer Science' }] ]

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