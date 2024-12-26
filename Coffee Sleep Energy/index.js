const toggles = document.querySelectorAll('.toggle');
const Coffee = document.querySelector("#Coffee");
const Sleep = document.querySelector("#Sleep");
const Energy = document.querySelector("#Energy");

toggles.forEach(toggle =>
    toggle.addEventListener("change", (e) => {
        doTheTrick(e.target);
    })
);

function doTheTrick(theClickedOne) {
    if (Coffee.checked && Sleep.checked && Energy.checked) {
        if (Coffee === theClickedOne) {
            Energy.checked = false;
        } else if (Sleep === theClickedOne) {
            Coffee.checked = false;
        } else if (Energy === theClickedOne) {
            Sleep.checked = false;
        }
    }
}


