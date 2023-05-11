import { Theme } from "./theme.model";

export class Commentpending {
  idcp: number;
  title: string;
  message: string;
  themepending: Theme | undefined;

  constructor() {
    this.idcp = 0;
    this.title = '';
    this.message = '';
}
}
