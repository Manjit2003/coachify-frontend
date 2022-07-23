import { useQuery } from "react-query";
import { Teacher } from "./../../types/index";
import { axiosClient } from "./../../utils/client";

export const getTeachers = async () => {
    return axiosClient.get<Teacher[]>("/teachers");
};

export const postTeacher = async (teacher: Partial<Teacher>) => {
    return axiosClient.post<Teacher>("/teachers/", teacher);
};

export const putTeacher = async (teacher: Partial<Teacher>) => {
    return axiosClient.patch<Teacher>(`/teachers/${teacher.id}/`, teacher);
};

export const deleteTeacher = async (id: string) => {
    return axiosClient.delete(`/teachers/${id}`);
};

export const getSingleTeacher = async (id: string) => {
    return axiosClient.get<Teacher>(`/teachers/${id}`);
};
