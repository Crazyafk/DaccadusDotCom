import { Spell } from './main';
function onLoad() {
    console.log("getformdata onLoad called");
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("#form");
        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                console.log(formData);
                getSpell(formData);
            });
        }
    });
}
function getSpell(data) {
    const name = data.get("name");
    const level = data.get("level");
    const schools = data.getAll("school");
    const castingtime = data.get("castingtime");
    const range = data.get("range");
    const duration = data.get("duration");
    const concentration = data.get("concentration");
    const components = data.getAll("components");
    const componentdesc = data.get("componentdesc");
    const description = data.get("description");
    const lists = data.getAll("lists");
    const spell = new Spell(level, name, schools, description, lists, castingtime, components, concentration, range, duration, componentdesc);
    console.log(spell);
}
