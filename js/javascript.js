var fps = 10;
var obj = "st_OF6";
var type = 1;
var color = "fill:#18ff44;stroke:black;stroke-width:1; О";
var blnk = "fill:#ff0000;stroke:black;stroke-width:1; О";
var map = document.getElementById("Слой_1");
var mapContDoc = map.contentDocument;

element = mapContDoc.getElementsByName("obj");

function anim() {

    setTimeout(function () {
            var cont = document.getElementById("Слой_1");
            var element = mapContDoc.getElementsByName(obj);
            if (element.getAttribute('type') == "1") {
                if (element.getAttribute('color')) {
                    cont.getSVGDocument().getElementsByName("obj").setAttribute("stroke", "#18ff44");
                    blnk++;
                    if (element.getAttribute('blnc') != "visible") {

                        if (blnk == 0) {
                            visib = element.getAttribute('color');
                        }

                        if (blnk == 1) {
                            visib = element.getAttribute('blnc');
                        }

                    } else {
                        visib = element.getAttribute('color');
                    }
                    element.setAttribute('style', visib);
                }
            }
        }
        requestAnimationFrame(anim);

    }, 1000 / fps);
}
anim(); 

/*
var fps = 1;
var color = "#ff9d00";
var color_st = "#0bff0b";
var look = "";
var tkt = 5000;
var names = 'conv,rectstasto';
var arr = names.split(',');
var blink = 1;

function anim() {
    setTimeout(function () {
        var conteiner = document.getElementById("page_1");
        var mapContDoc = conteiner.contentDocument;
        var element = mapContDoc.getElementById('conv');
        element.setAttribute('blink', 1);
        if (element.getAttribute('blink') == 1) {
            //console.log(element); вывод данных в консоль для отладки
            conteiner.getSVGDocument().getElementById("conv").setAttribute("stroke", "#18ff44");
            blink++;
        } else if (element.getAttribute('blink') == 2) {
            //console.log(element); вывод данных в консоль для отладки
            conteiner.getSVGDocument().getElementById("conv").setAttribute("stroke", "#676767");
            blink = 1;
        }
        requestAnimationFrame(anim);
    }, 1000 / fps);
}
anim();



function anim() {
    var element = document.getElementById('conv');
 
    if (blink == 1) {
      element.setAttribute("fill", "#18ff44");
      blink++;
    } else {
      element.setAttribute("fill", "#676767");
      blink = 1;
    }
  }
  

if(element.getAttribute('type') == "1"){
if(element.getAttribute('color')){ 
 
if(element.getAttribute('blnc')!="none"){
 
if(blnk==0){ look = element.getAttribute('color');}
 
if(blnk==1){ look = element.getAttribute('blnc');}
 
}else{
 
look = element.getAttribute('color');
 
}
 
element.setAttribute('style', look);
 
}
}

*/
