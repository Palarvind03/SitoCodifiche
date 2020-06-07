var page=0;
var maxPage=3;
var volte=1;
var prece=0;
var xx=4;
var ris = 0; 
var cont=0;
var interval = null;
function chiudiErr(x){
    var err=document.querySelector("#errore");
    var contni = document.querySelector("#contenitore");
    err.style.animation="opa-0 1s forwards"
    contni.style.filter="none";
    contni.style.pointerEvents="auto"
}

function chiudiAlert1(x){
    var alertDiv1 = document.querySelector("#alert1");
    var contni = document.querySelector("#contenitore");
    alertDiv1.style.animation="opa-0 1s forwards";
    contni.style.filter="none";
    contni.style.pointerEvents="auto"
}

function forward(){
    var pag=document.querySelectorAll(".page");
    var testBtn=document.querySelector("#test");
    if(page<maxPage){
        pag[page].style.display="none";
        page+=1
        pag[page].style.display="block";
    }
    if(page==3){
        testBtn.style.display="block";
    }
}

function back(){
    var pag=document.querySelectorAll(".page");
    var testBtn=document.querySelector("#test");
    if(page!=0){
        pag[page].style.display="none";
        page-=1
        pag[page].style.display="block"; 
        testBtn.style.display="none";
    }
}
function video(){
    var stopV=document.querySelector("#stop");
    var startV=document.querySelector("#start");
    startV.style.pointerEvents="none";
    interval = setInterval(startVideo,150);
    stopV.style.animation="shadow-pulse 1s infinite";
    startV.style.animation="none";
    stopV.style.pointerEvents="block";
}

function startVideo(){
    var img=document.querySelector("#imgVid");
    cont++;
    if(cont<=4){
        if(cont==1){
            img.src="./img/demo1/fotogrammi1.jpg"
        }else if(cont==2){
                img.src="./img/demo1/fotogrammi2.jpg"
            }else if(cont==3){
                    img.src="./img/demo1/fotogrammi3.jpg"
                }else if(cont==4){
                        img.src="./img/demo1/fotogrammi4.jpg"
                    }  
    }else{
        cont=0;
    } 
}

function Stopvideo(){
    var img=document.querySelector("#imgVid");
    var stopV=document.querySelector("#stop");
    var startV=document.querySelector("#start");
    clearInterval(interval);
    cont=0;
    img.src="./img/demo1/fotogrammi1.jpg"
    stopV.style.animation="none";
    startV.style.animation="shadow-pulse 1s infinite";
    startV.style.pointerEvents="auto";
    stopVs.style.pointerEvents="auto";
}

function chiudiAlertc(x){
    var alertDiv = document.querySelector("#alert-c");
    var contni = document.querySelector("#contenitore");
    alertDiv.style.visibility="visible";
    contni.style.filter="blur(2px)"
    contni.style.pointerEvents="none";
}

function salta(){
    var alertDiv = document.querySelector("#alert-c");
    var contni = document.querySelector("#contenitore");
    alertDiv.style.visibility="hidden"
    contni.style.filter="none";
    contni.style.pointerEvents="auto";
}

function ok(){
    var alertDiv = document.querySelector("#alert-c");
    var pag=document.querySelectorAll(".page");
    var divV=document.querySelector("#veri");
    var contni = document.querySelector("#contenitore");
    var BtnFine=document.querySelector("#finito");
    var testBtn=document.querySelector("#test");
    var btnB=document.querySelector("#back");
    var btnF=document.querySelector("#for");
    contni.style.filter="none";
    alertDiv.style.visibility="hidden"
    pag[page].style.display="none";
    divV.style.display="block";
    testBtn.style.display="none";
    BtnFine.style.display="block";
    contni.style.pointerEvents="auto";
    btnB.style.display="none";
    btnF.style.display="none";
}

function corrego(){
    var point=0;
    var inputs = document.querySelectorAll(".doma");
    var notRis=document.querySelector("#risultato");
    var r1=document.querySelector("#ris1");
    var r2=document.querySelector("#ris2");
    var r3=document.querySelector("#ris3");
    var r4=document.querySelector("#ris4");
    var lvl=document.querySelector("#livello");
    var contni = document.querySelector("#contenitore");
    var err=document.querySelector("#errore");
    var casa = document.querySelector("#home");
    var Rfai=document.querySelector("#rifai");
    var arrayR=[];
    var giudizio;
    if(inputs[0].value=="" || inputs[1].value=="" || inputs[2].value=="" || inputs[3].value==""){
        err.style.animation="alert-a 1s ease-in-out forwards"
        contni.style.filter="blur(2px)";
        contni.style.pointerEvents="none";
    }else{
        if(inputs[0].value=="SI" || inputs[0].value=="si" || inputs[0].value=="NO" || inputs[0].value=="no"){
            arrayR[0]="Corretta"
            inputs[0].style.pointerEvents="none";
            inputs[0].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[0]="Sbaglita"
            inputs[0].style.border="solid 1px red";
        }

        if(inputs[1].value=="linee" || inputs[1].value=="LINEE" || inputs[1].value=="Linee" || inputs[1].value=="linee verticali" || inputs[1].value=="Linee Verticali" || inputs[1].value=="LINEE VERTICALI"){
            arrayR[1]="Corretta"
            inputs[1].style.pointerEvents="none";
            inputs[1].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[1]="Sbaglita"
            inputs[1].style.border="solid 1px red";
        }

        if(inputs[2].value=="FPS" || inputs[2].value=="fps" || inputs[2].value=="Fps"){
            arrayR[2]="Corretta"
            inputs[2].style.pointerEvents="none";
            inputs[2].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[2]="Sbaglita"
            inputs[2].style.border="solid 1px red";
        }

        if(inputs[3].value=="Container" || inputs[3].value=="container" || inputs[3].value=="CONTAINER"){
            arrayR[3]="Corretta"
            inputs[3].style.pointerEvents="none";
            inputs[3].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[3]="Sbaglita"
            inputs[3].style.border="solid 1px red";
        }

        if(point==4){
            giudizio="Eccelente!"
        }else if(point==3){
                 giudizio="Bravo!"
              }else if(point==2){
                     giudizio="Sufficiente"
                    }else if(point==1){
                            giudizio="Scarso"
                           }else if(point==0){
                                     giudizio="Grave!"
                                 }
        lvl.innerHTML=giudizio;
        r1.innerHTML="domanda 1: "+arrayR[0];
        r2.innerHTML="domanda 2: "+arrayR[1];
        r3.innerHTML="domanda 3: "+arrayR[2];
        r4.innerHTML="domanda 4: "+arrayR[3];
        if(point>=2){
            Rfai.style.display="none"
            casa.style.display="block"
            localStorage.setItem("stato","completato");
        }else{
            casa.style.display="none"
            Rfai.style.display="block"
        }
        localStorage.setItem("vidPoint",point);
        notRis.style.visibility="visible"
        contni.style.filter="blur(2px)"
        contni.style.pointerEvents="none";
    }
}

function rifai(){
    var contni = document.querySelector("#contenitore");
    var notRis=document.querySelector("#risultato");
    contni.style.filter="none"
    contni.style.pointerEvents="auto";
    notRis.style.visibility="hidden"
}

function campiona(){
    var elemen0=document.querySelector("#elm0");
    var elemen1=document.querySelector("#elm1");
    var elemen2=document.querySelector("#elm2");
    var scanner=document.querySelector("#scan");
    var campionato1=document.querySelector("#camt1");
    var campionato2=document.querySelector("#camt2");
    var campionato3=document.querySelector("#camt3");
    var acampt=document.querySelector("#areaC2");
    var elmC=document.querySelector("#elmC");
    scanner.classList.remove("anima-scan");
    elemen0.classList.remove("anima-num0");
    elemen1.classList.remove("anima-num1");
    elemen2.classList.remove("anima-num2");
    acampt.classList.remove("anima-campt");
    elmC.classList.remove("anima-campt1");
    var arrayNum=[1,2,3,4,5];
    var arrayRan=[];
    void scanner.offsetWidth;
    void elemen0.offsetWidth;
    void elemen1.offsetWidth;
    void elemen2.offsetWidth;
    void acampt.offsetWidth;
    void elmC.offsetWidth;   
    scanner.classList.add("anima-scan");
    elmC.classList.add("anima-campt1");
    var cont=-1;
    for(var i=0;i<10;i++){
        var ran=Math.floor(Math.random() * 5) + 1;
        for(var j=0;j<5;j++){
            if(ran==arrayNum[j]){
                cont++;
                if(cont==3){
                    i=50;
                }else{
                    arrayRan[cont]=arrayNum[j];
                    arrayNum[j]=0;
                }
            }
        }
    }
    elemen0.innerHTML=arrayRan[0]
    elemen1.innerHTML=arrayRan[1]
    elemen2.innerHTML=arrayRan[2]
    elemen0.classList.add("anima-num0");
    elemen1.classList.add("anima-num1");
    elemen2.classList.add("anima-num2");
    campionato1.innerHTML=arrayRan[0]
    campionato2.innerHTML=arrayRan[1]
    campionato3.innerHTML=arrayRan[2]

    if(arrayRan[0]>=3){
        campionato1.style.height="50px";
        campionato1.style.width="50px";
    }else{
        campionato1.style.height="30px";
        campionato1.style.width="30px";
    }
    if(arrayRan[1]>=3){
        campionato2.style.height="50px";
        campionato2.style.width="50px";
    }else{
        campionato2.style.height="30px";
        campionato2.style.width="30px";
    }
    if(arrayRan[2]>=3){
        campionato3.style.height="50px";
        campionato3.style.width="50px";
    }else{
        campionato3.style.height="30px";
        campionato3.style.width="30px";
    }
    campionato1.style.textAlign="center"
    campionato2.style.textAlign="center"
    campionato3.style.textAlign="center"
    acampt.classList.add("anima-campt");
}

function cambioimgS(){
    var img=document.querySelector("#imgC");
    var sel=document.querySelector("#selC");
    if(sel.value==1){
        img.src="./img/demo3/cmp1.png"
    }else if(sel.value==2){
            img.src="./img/demo3/cmp2.png"
          }else if(sel.value==3){
                img.src="./img/demo3/cmp3.png"
                }else if(sel.value==4){
                    img.src="./img/demo3/cmp4.png"
                }
}