import { createButton } from "../../components/button.js";

function createMenuScene(){
    scene("menu", () => {
        createButton("Play", center(), () => {
            go("idle");
        });
    });
}

export {createMenuScene};