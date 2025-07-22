/// <reference path="./neutralino.d.ts" />

console.log(Neutralino.computer.getArch());

Neutralino.init();

Neutralino.events.on("windowClose", () => {
    Neutralino.app.exit();
});

function closeWindow() {
    Neutralino.app.exit();
}