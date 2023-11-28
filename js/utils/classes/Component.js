export default class Component{

    //#region Properties

    #id;
    #gain;
    #nbItems;
    #posBtn;
    #posTxt;

    //#endregion
    
    //#region Constructor

    constructor({id, posBtn, posTxt, gain = 1, nbItems = 0}){
        this.#id = id;
        this.#posBtn = posBtn;
        this.#posTxt = posTxt;
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
            id: this.#id,
            gain: this.#gain,
            nbItems: this.#nbItems,
            posBtn: { ...this.#posBtn },
            posTxt: { ...this.#posTxt },
        };
    }

    //#endregion
}