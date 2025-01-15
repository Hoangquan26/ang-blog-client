export interface IBlog {
    id: number;
    title: string;
    content: string;
    image: string | null;
    tags: string[];
    date: Date;
    author: string 
}
