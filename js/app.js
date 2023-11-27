import { createScenes } from "./scenes/scenes.js";
import { kaboom } from "./utils/kaboom/kaboom.js";

kaboom({
    background: [0,0,0],
});

createScenes();

go("menu");