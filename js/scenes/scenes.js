import { createIdleScene } from "./idle/idleScene.Js";
import { createMenuScene } from "./menu/menuScene.js";

function createScenes(){
    createMenuScene();
    createIdleScene();
}

export {createScenes};