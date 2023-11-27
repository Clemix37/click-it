export default class Character {
    
    //#region Properties

    #speed;
    #strength;
    #intelligence;

    //#endregion

    //#region Constructor

    constructor({speed,strength,intelligence}){
        this.#speed = speed;
        this.#strength = strength;
        this.#intelligence = intelligence;
    }

    //#endregion

    //#region Accessors

    get speed(){return this.#speed;}
    get strength(){return this.#strength;}
    get intelligence(){return this.#intelligence;}

    //#endregion

}