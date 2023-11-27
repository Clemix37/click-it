import Component from "../utils/classes/Component.js";
import { createButton } from "./button.js";

/**
 * Create the button at the p position
 * Return it as a Component
 * @param {string} title 
 * @param {vec2} p 
 * @param {number} gain 
 * @param {Function} f 
 * @returns {Component}
 */
function addComponent(title, p, gain, f){
	const btn = createButton(title, p, f);

	return new Component({btn, gain});
}

export {addComponent};