export default class Component{

    //#region Properties

    #btn;
    #gain;
    #nbItems;

    //#endregion
    
    //#region Constructor

    constructor({btn, gain = 1, nbItems = 0}){
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

    //#endregion
}