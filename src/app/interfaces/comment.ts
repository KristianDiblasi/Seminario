import { User } from './user';

export interface NewComment{
    comment: string;
}
export interface Comment {
    created_at: string;
    _id: string;
    comment: string;
    _author: User;
}
