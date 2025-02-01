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

    if(rainbows.length > 1)
        rainbows.forEach(e => 
        {
            e.innerHTML = getNextColor(e.innerHTML);
        });
    else if (rainbows.length)
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