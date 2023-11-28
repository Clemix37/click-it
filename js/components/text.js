
function createText(txt, p){
    const txtComp = add([
        text(txt),
        pos(p),
    ]);

    return txtComp;
}

export { createText };