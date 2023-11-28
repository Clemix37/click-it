import { createButton } from "../../components/button.js";
import { addComponent } from "../../components/components.js";
import { createText } from "../../components/text.js";
import Component from "../../utils/classes/Component.js";

function createIdleScene(){

    let components = getData("components", []);
    let energy = getData("energy", 0);

    function createDefaultComponents(){
        const cookieComp = addComponent("Cookie", vec2(200,100), 1, () => {
            cookieComp.classe.addItem();
            cookieComp.txt.text = `Cookies: ${cookieComp.classe.nbItems}`;
        });
        components.push(cookieComp.classe);
        
        const teslaComp = addComponent("Tesla", vec2(200,200), 2, () => {
            teslaComp.classe.addItem();
            teslaComp.txt.text = `Teslas: ${teslaComp.classe.nbItems}`;
        });
        components.push(teslaComp.classe);
    }
    
    function saveIdle(){
        setData("energy", energy);
        setData("components", components.map(c => c.export()));
    }

    scene("idle", () => {

        // We display the current energy
        const energyText = add([
            text(`Energy: ${energy}`),
            pos(width() / 2, 0),
        ]);

        if(components.length <= 0) createDefaultComponents();
        else {
            components = components.map(comp => {
                const compClass = new Component({...comp});
                // We create the related txt
                const txt = createText(`${comp.id}: ${comp.nbItems}`, vec2(comp.posTxt.x, comp.posTxt.y));
                // We create the related button
                createButton(comp.id, vec2(comp.posBtn.x, comp.posBtn.y), () => {
                    compClass.addItem();
                    txt.text = `${comp.id}: ${compClass.nbItems}`;
                });
                // We return the component
                return compClass;
            });
        }
        
        loop(1, () => {
            const total = components.reduce((prev, comp) => prev + comp.calculateGain(), 0);
            energy += total;
            energyText.text = `Energy: ${energy} (${total}/s)`;
            saveIdle();
        });
    });
}

export {createIdleScene};