const contentbox = document.querySelector(".contentbox");

var icon = document.getElementById("icon");
        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src = "sun-line.png";
                icon.style.color = "white";
            }else{
                icon.src = "moon-fill.png";
            }
        }

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    // console.log(myObj);
    let a = [];
    for (const x in myObj) {
        a.push(x);
    }
    
    for (let i = 0; i < a.length; i++) {
        creatElement(i,myObj);
    }

}
xmlhttp.open("GET", "content.JSON");
xmlhttp.send();


function creatElement(i, myObj) {
    // console.log(myObj[i].src);
    const div1 = document.createElement("div");
    div1.classList.add("content");

    const img = document.createElement("img");
    const url = myObj[i].src;
    img.setAttribute("src", url);

    const div2 = document.createElement("div");
    div2.classList.add("hcontent");

    const anchor = document.createElement("a");

    const para = document.createElement("p");

    contentbox.append(div1);
    div1.append(img);
    div1.append(div2);

    div2.append(anchor);
    div2.append(para);

    anchor.innerText = myObj[i].anchor;
    para.innerText = myObj[i].para;
}