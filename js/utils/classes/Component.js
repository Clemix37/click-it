export default class Component{

    //#region Properties

    #id;
    #btn;
    #gain;
    #nbItems;

    //#endregion
    
    //#region Constructor

    constructor({id, btn, gain = 1, nbItems = 0}){
        this.#id = id;
        this.#btn = btn;
        this.#gain = gain;
        this.#nbItems = nbItems;
    }

    //#region Accessors

    get nbItems(){return this.#nbItems;}

    //#endregion

    //#region Methods

    /**
     * Add the number of items passed as parameters
     * @param {number} nb 
     */
    addItem(nb = 1){
        this.#nbItems += nb;
    }

    /**
     * Calculte the gain based on the number of items and the gain per Item
     * @returns {number}
     */
    calculateGain(){
        return this.#nbItems * this.#gain;
    }

    /**
     * Retourne un objet contenu les propriétés de chaque
     * @returns {object}
     */
    export(){
        return {
            id: "",
            gain: this.#gain,
            nbItems: this.#nbItems,
        };
    }

    //#endregion
}