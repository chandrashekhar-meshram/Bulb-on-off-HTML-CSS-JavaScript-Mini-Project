const tubelight = () =>{
    //alert("hi"); // to check function working oe not
    let btext = document.getElementById("bulbdata");
    for(let x = 1; x <= 5; x++){
        let bid = document.getElementById("lightid".concat(x));
        //console.log(bid.src);//to check image files

        if(bid.src.match("lighton")){
            bid.src = "lightoff.png";
            btext.innerHTML = "Light OFF";
            btext.style.color = "yellowgreen";
        } else {
            bid.src = "lighton.png";
            btext.innerHTML = "Light ON";
            btext.style.color = "red";
        }
    }
}