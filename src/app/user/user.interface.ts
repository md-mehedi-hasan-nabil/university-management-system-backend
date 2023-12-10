
type Role = 'student' | 'faculty' | 'admin';

export type TUser = {
    userId: string;
    name: string;
    password: string;
    role: Role,
    status: boolean;
    isDeleted: boolean;
}
