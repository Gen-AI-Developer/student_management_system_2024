// 3. System Design
// a. Classes and Attributes
// Student Class: This class will hold attributes and methods relevant to a student.

// Attributes:

// name: Student's name.
// student_id: A unique 5-digit ID.
// courses: A list of courses the student is enrolled in.
// balance: The current balance for tuition fees.

// Methods:

// enroll(course): Adds a course to the student's list.
// view_balance(): Returns the current balance.
// pay_tuition(amount): Deducts the amount from the balance.
// show_status(): Displays the student's details.
enum courses {
    'CS' = "Computer Science",
    'MBA' = "Management Business Accounting",
    'BBA' = "Bachelor of Business Administration",
    'BSPHY' = "Bachelor of Sciences in Physics",
}

class StudentManagementSystem {
    constructor(
        public student_id: number,
        private name: string,
        private course_name: string,
        private balance: number,
    ) {

    }
    public enrolled_in(): string {
        return this.course_name.toString();

    }
    public view_balance(): number {
        return this.balance;

    }
    public pay_tution(pt: number): void {
        this.balance = this.balance + pt
    }
    public show_status(): void {


    }

}

let studentOne = new StudentManagementSystem(1234, "safdar", 'CS', 1000);
console.log(studentOne.enrolled_in);
console.log(studentOne.pay_tution(1000))
console.log(studentOne.show_status)