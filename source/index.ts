#!/usr/bin/env node
interface StudentStructure {
    name: string;
    gender: "Male" | "Female";
    fatherName: string;
    id: number;
    Semester: string;
    Department: string;
}

class SMS implements StudentStructure {
    name: string;
    gender: "Male" | "Female";
    fatherName: string;
    id: number;
    Semester: string;
    Department: string;

    constructor(name: string, gender: "Male" | "Female", fatherName: string, id: number, Semester: string, Department: string) {
        this.name = name;
        this.gender = gender;
        this.fatherName = fatherName;
        this.id = id;
        this.Semester = Semester;
        this.Department = Department;
    }

}
