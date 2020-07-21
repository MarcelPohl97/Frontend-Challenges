


const reload_app = () => {
    document.getElementsByClassName("app")[0].innerHTML = "";
}

const animated_form = () => {
    reload_app()
    const app = document.createElement("div");
    app.textContent = "Animated Form"
    app.addEventListener("click", () => {
        landing_page();
    })
    document.getElementsByClassName("app")[0].appendChild(app);
}

const landing_page = () => {
    reload_app();
    const app = document.createElement("div");
    app.textContent = "Landing Page"
    app.addEventListener("click", () => {
        animated_form();
    })
    document.getElementsByClassName("app")[0].appendChild(app);
}

landing_page();