export class Message {
    idM: number;
    contenu: string;
    statut: string;
    TempsCreation: Date;

    constructor() {
        this.idM = 0;
        this.contenu = '';
        this.statut = '';
        this.TempsCreation = new Date();
      }
}
