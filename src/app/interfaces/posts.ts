export interface Posts {
  data: PostsInformation[];
  meta: number;
}

export interface PostsInformation {
  tittle: string;
  description: string;
  date: string;
  user: string;
  section: string;
  comment: string;
  id: number;
  day: number;
  month: string;
}



