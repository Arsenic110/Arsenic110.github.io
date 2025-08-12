// component loader

//you use it like this:
//<div class="component" id="[name]"></div>
function loadComponents() {
    //fetch elements that represent components
    let components = document.getElementsByClassName("component");

    components = Array.from(components);

    components.forEach(component => {

        let preventCaching = false;
        
        //turn component id into a link
        let target = "components/" + component.id + ".html";
        target = preventCaching ? target + "?v=" + Date.now() : target;
        fetch(target) //changing parameter to prevent caching
            .then(res => res.text())
            .then(html => {
                let temp = document.createElement("div");
                temp.innerHTML = html.trim();

                //if multiple top level elements, combine into a fragment
                let fragment = document.createDocumentFragment();

                Array.from(temp.childNodes).forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE && ["STYLE", "LINK", "META", "TITLE"].includes(node.tagName)) {
                        document.head.appendChild(node);
                    } 
                    else {
                        fragment.appendChild(node);
                    }
                });

                component.replaceWith(fragment);
            })
            .catch(err => console.error("Error loading", target, err));
    });
}
loadComponents();