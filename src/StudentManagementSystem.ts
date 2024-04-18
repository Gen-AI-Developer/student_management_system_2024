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
// Define a Fee interface to represent Fee Information
interface FeeInformation {
    id: string;
    is_submitted: false;
    is_remaining: number;
}

class ManagementSystem {

}
const safdar = 1678876;