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
    public enroll(course_name: courses) {
        this.course_name = course_name;
    }

}