import { PostInterface } from "./genric";

export interface PostStateInterface {
    isLoading:boolean;
    posts:PostInterface[];
    error:string | null;
}

export interface AppStateInterface {
    posts :PostStateInterface;
}
