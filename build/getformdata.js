"use strict";
function onLoad() {
    console.log("test console");
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("#form");
        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                console.log(formData);
            });
        }
    });
}
