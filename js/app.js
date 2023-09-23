let globalRainbowIndex = 0;

let rainbowIndex = 
[
    "#fd7f7e",
    "#ffc66d",
    "#ffff61",
    "#7bfa86",
    "#73b0ff",
    "#d97efd"
];

window.onload = () =>
{
    let rainbows = [...document.getElementsByClassName("rainbow")];

    console.log(rainbows);

    if(rainbows.length)
        rainbows.forEach(e => 
        {
            e.innerHTML = getNextColor(e.innerHTML);
        });
    else
        rainbows.innerHTML = getNextColor(rainbows.innerHTML);


};

function getNextColor(txt, global)
{
    let currentRainbowIndex = 0;
    if(global)
        currentRainbowIndex = globalRainbowIndex;

    let arr = txt.split('');
    let re = "";

    arr.forEach(e => 
    {
        if(e == " ")
        {
            re += `<span style="white-space: pre;"> </span>`;
            return;
        }


        re += `<span style="color:${rainbowIndex[(currentRainbowIndex++) % rainbowIndex.length]}">${e}</span>`;
    });

    return re;
}

function link(text)
{
    window.location.href = text;
}

function activateSuggestions()
{
    let suggestionsContainer = document.getElementsByClassName("suggestions-container")[0];
    suggestionsContainer.classList.remove("display-none");

    suggestionsContainer.scrollIntoView({behavior: 'smooth'});

    console.log("active!");
}

function sendSuggestion()
{
    console.log("sending");

    let suggestionsContainer = document.getElementById("sugg");
    suggestionsContainer.classList.add("hide");

    let animationWhite = document.getElementsByClassName("animation-white")[0];
    animationWhite.classList.remove("display-none");
    animationWhite.classList.add("animation-white-animate");

    setTimeout(resetSuggestion, 3600);
}

function resetSuggestion()
{
    console.log("sending");

    document.getElementsByClassName("flex-container")[0].scrollIntoView({behavior: 'smooth'});

    setTimeout(() => {document.getElementsByClassName("suggestions-container")[0].classList.add("display-none")}, 300);

    setTimeout(() => {let sugg = document.getElementById("sugg"); sugg.classList.remove("hide"); let animationWhite = document.getElementsByClassName("animation-white")[0]; animationWhite.classList.add("display-none"); animationWhite.classList.remove("animation-white-animate");}, 600);

}
