import Component from "../utils/classes/Component.js";

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
    const btn = add([
		rect(240, 80, { radius: 8 }),
		pos(p),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	// add a child object that displays the text
	btn.add([
		text(title),
		anchor("center"),
		color(0, 0, 0),
	]);

	// onHoverUpdate() comes from area() component
	// it runs every frame when the object is being hovered
	btn.onHoverUpdate(() => {
		btn.scale = vec2(1.2);
		setCursor("pointer");
	});

	// onHoverEnd() comes from area() component
	// it runs once when the object stopped being hovered
	btn.onHoverEnd(() => {
		btn.scale = vec2(1);
        setCursor("default"); // Reset the default cursor
	});

	// onClick() comes from area() component
	// it runs once when the object is clicked
	btn.onClick(f);

	return new Component({btn, gain});
}

export {addComponent};