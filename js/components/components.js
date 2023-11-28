import Component from "../utils/classes/Component.js";
import { createButton } from "./button.js";
import { createText } from "./text.js";

/**
 * Create the button at the p position
 * Return it as a Component
 * @param {string} title 
 * @param {vec2} p 
 * @param {number} gain 
 * @param {Function} f 
 * @returns {Component}
 */
function addComponent(title, {x,y}, gain, f){
	const btn = createButton(title, vec2(x,y), f);
	const posTxt = vec2(x + 200, y);
	const txt = createText(`${title}: ${0}`, posTxt);

	const classe = new Component({id: title, posBtn: {x,y}, gain, posTxt: {x:x+200, y}});
	return {
		txt,
		classe,
	};
}

export {addComponent};