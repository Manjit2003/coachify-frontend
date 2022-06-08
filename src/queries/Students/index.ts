import { Student } from "./../../types/index";
import { axiosClient } from "../../utils/client";

export const getStudents = async () => {
    return axiosClient.get<Student[]>("/students");
};

export const postStudent = async (student: Partial<Student>) => {
    return axiosClient.post<Student>("/students/", student);
};

export const deleteStudent = async (id: string) => {
    return axiosClient.delete(`/students/${id}`);
};

export const getSingleStudent = async (id: string) => {
    return axiosClient.get<Student>(`/students/${id}`);
};
