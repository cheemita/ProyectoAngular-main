export interface Comments {
    data: CommentsInformation[];
    meta: number;
}

export interface CommentsInformation {
    id:      number;
    comment: string;
    user:    string;
    idpost:  number;
}