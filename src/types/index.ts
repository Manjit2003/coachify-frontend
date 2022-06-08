interface DashboardData {
    teachers: number;
    students: number;
    classes: number;
    parents: number;
}

export interface Teacher {
    id: string;
    students: Student[];
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    address: string;
    gender: string;
    avatar: string;
}

export interface Student {
    id: string;
    parent: Partial<Parent>;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    address: string;
    gender: string;
    avatar: string;
}

interface Parent {
    id: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    address: string;
    gender: string;
    avatar: string;
}
