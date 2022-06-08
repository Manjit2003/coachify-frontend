import { Student } from "./index";
import { Teacher } from "src/types";

export interface Class {
    name: string;
    description: string;
    teacher: Teacher;
    students: Student[];
}
