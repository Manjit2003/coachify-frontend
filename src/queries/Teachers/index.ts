import { useQuery } from "react-query";
import { Teacher } from "./../../types/index";
import { axiosClient } from "./../../utils/client";

export const getTeachers = async () => {
    return axiosClient.get<Teacher[]>("/teachers");
};

export const postTeacher = async (teacher: Partial<Teacher>) => {
    return axiosClient.post<Teacher>("/teachers/", teacher);
};