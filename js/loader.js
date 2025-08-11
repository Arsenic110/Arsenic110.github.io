// component loader

//you use it like this:
//<div class="component" id="[name]"></div>
function loadComponents() {
    //fetch elements that represent components
    let components = document.getElementsByClassName("component");

    components = Array.from(components);

    components.forEach(component => {
        
        //turn component id into a link
        let target = "components/" + component.id + ".html";
        fetch(target + "?v=" + Date.now()) //changing parameter to prevent caching
            .then(res => res.text())
            .then(html => {
                let temp = document.createElement("div");
                temp.innerHTML = html.trim();

                //if multiple top level elements, combine into a fragment
                let fragment = document.createDocumentFragment();
                while (temp.firstChild) {
                    fragment.appendChild(temp.firstChild);
                }

                component.replaceWith(fragment);
            })
            .catch(err => console.error("Error loading", target, err));
    });
}

//document.addEventListener("DOMContentLoaded", loadComponents);
loadComponents();