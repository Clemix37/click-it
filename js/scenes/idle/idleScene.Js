import { addComponent } from "../../components/components.js";

const components = getData("components", []);
let energy = getData("energy", 0);

function saveIdle(){
    saveData("energy", energy);
    saveData("components", components.map(c => c.export()));
}

function createIdleScene(){
    scene("idle", () => {

        const energyText = add([
            text(`Energy: ${energy}`),
            pos(width() / 2, 0),
        ]);
        
        const cookie = addComponent("Cookie", vec2(200,100), 1, () => {
            cookie.addItem();
            cookiesTxt.text = `Cookies: ${cookie.nbItems}`;
        });
        components.push(cookie);
        
        const tesla = addComponent("Tesla", vec2(200,200), 2, () => {
            tesla.addItem();
            teslaTxt.text = `Teslas: ${tesla.nbItems}`;
        });
        components.push(tesla);
        
        const cookiesTxt = add([
            text(`Cookies: ${cookie.nbItems}`),
            pos(500, 100),
        ]);
        
        const teslaTxt = add([
            text(`Teslas: ${tesla.nbItems}`),
            pos(500, 200),
        ]);
        
        loop(1, () => {
            const total = components.reduce((prev, comp) => prev + comp.calculateGain(), 0);
            energy += total;
            energyText.text = `Energy: ${energy}`;
            saveIdle();
        });
    });
}

export {createIdleScene};