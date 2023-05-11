import { Theme } from "./theme.model";

export class Commentaire {
    idC: number;
    title: string;
    message: string;
    theme: Theme | undefined;

    constructor() {
        this.idC = 0;
        this.title = '';
        this.message = '';
    }
}
