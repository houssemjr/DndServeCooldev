import { Theme } from "./theme.model";

export class Posts {
    idP: number;
    name: string; // renamed to lowercase
    post: string;
    likess: number;
    nbrsignal: number;
    date: Date; // changed to string type
    themes: Theme[];
    constructor() {
        this.idP = 0;
        this.name = '';
        this.post='';
        this.likess = 0;
        this.nbrsignal = 0;
        this.date = new Date();
        this.themes = [];
      }
      
      
    
}
