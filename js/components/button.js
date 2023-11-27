/**
 * Create the button with data passed as arguments
 * @param {string} title 
 * @param {vec2} p position of the button
 * @param {Function|null} f function when clicked
 * @returns {Button}
 */
function createButton(title, p, f = null){
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
	if(!!f) btn.onClick(f);

    return btn;
}

export {createButton};