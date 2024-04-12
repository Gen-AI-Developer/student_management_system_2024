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