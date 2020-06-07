var page=0;
var maxPage=9;
var volte=1;
var prece=0;
var xx=4;
var ris = 0; 
function chiudiErr(x){
    var err=document.querySelector("#errore");
    var contni = document.querySelector("#contenitore");
    err.style.animation="opa-0 1s forwards"
    contni.style.filter="none";
    contni.style.pointerEvents="auto"
}

function chiudiAlert1(x){
    var alertDiv1 = document.querySelector("#alert1");
    var alertDiv2 = document.querySelector("#alert2");
    alertDiv1.style.animation="opa-0 1s forwards";
    alertDiv2.style.animation="alert-a 2s ease-in-out forwards";
}
function chiudiAlert2(x){
    var alertDiv2 = document.querySelector("#alert2");
    var contni = document.querySelector("#contenitore");
    alertDiv2.style.animation="opa-0 1s forwards";
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
    
    if(page==9){
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

function trasforma(){
    var img=document.querySelector("#imgRasVet");
    var divD=document.querySelector("#imgDes");
    var yo=document.querySelector("#ioSono");
    volte+=1;
    if(volte%2==0){
        img.src="./img/demo1/demo11.png";
        yo.innerHTML="yoyo,sono Vetoriale!";
    }else{
        img.src="./img/demo1/demo10.png";
        yo.innerHTML="yoyo,sono Raster!";
    }
}
function cambioDp(){
    var select=document.querySelector("#dp");
    var dpImg=document.querySelector("#dpiPpi");
    if(select.value==1){
        dpImg.src="./img/demo2/ppi"+xx+".jpg";
    }else{
        dpImg.src="./img/demo2/dpi"+xx+".jpg";
    }
}

function dpChange(x,z){
    var select=document.querySelector("#dp");
    var buttons=document.querySelectorAll(".triS");
    var dpImg=document.querySelector("#dpiPpi");
    xx=x;
    if(select.value==1){
        dpImg.style.animation="opa-1 1s forwards";
        dpImg.src="./img/demo2/ppi"+x+".jpg";
    }else{
        dpImg.src="./img/demo2/dpi"+x+".jpg";
    }
    buttons[prece].style.backgroundColor="white";
    buttons[prece].style.color="#333333";
    buttons[prece].style.border="solid 1px #F15F79"
    buttons[z].style.backgroundColor="#F15F79";
    buttons[z].style.color="white";
    prece=z;
}

function originaleH(){
    var dpImg=document.querySelector("#dpiPpi");
    dpImg.src="./img/demo2/main.jpg";
}

function originaleHN(){
    var dpImg=document.querySelector("#dpiPpi");
    var select=document.querySelector("#dp");
    if(select.value==1){
        dpImg.src="./img/demo2/ppi"+xx+".jpg";
    }else{
        dpImg.src="./img/demo2/dpi"+xx+".jpg";
    }
}

function cambioimgC(){
    var colSel=document.querySelector("#selC");
    var colImg=document.querySelector("#imgC");
    var imgP=document.querySelector("#imgPal");  
    arrayC=["2bit","8bit","16bit","24bit"];
    arrayP=["2p","8p","16p","24p"]
    for(var i=0;i<4;i++){
        if(colSel[i].selected){
            colImg.src="img/demo3/"+arrayC[i]+".png";
            imgP.src="img/demo3/"+arrayP[i]+".png";
        }
    }
}

function calcolo(){
    var inputs=document.querySelectorAll(".calIpt");
    var paraRis=document.querySelector("#risCal");
    var contni = document.querySelector("#contenitore");
    var err=document.querySelector("#errore");
    if(inputs[0].value=="" ||inputs[1].value=="" || inputs[2].value==""){
        err.style.animation="alert-a 1s ease-in-out forwards"
        contni.style.filter="blur(2px)";
        contni.style.pointerEvents="none";
    }else{
        var val=inputs[0].value*inputs[1].value*inputs[2].value;
        var ris=val*Math.pow(10, -6)
        paraRis.innerHTML=ris+"MB";
    }

}

function comp(){
    var imgCmp=document.querySelector("#imgCompresso");
    var selectL=document.querySelector("#selL");
    var dim=document.querySelectorAll(".dimensione");
    imgCmp.style.opacity="0";
    if(selectL.value==1){
        imgCmp.src="./img/demo4/lossy.jpeg";
        dim[1].innerHTML="112 KB";
    }
    if(selectL.value==2){
        imgCmp.src="./img/demo4/lossless.png";
        dim[1].innerHTML="131 KB";
    }
    imgCmp.style.visibility="visible";
    dim[0].style.animation="opa-1 1s forwards"
    dim[1].style.animation="opa-1 1s forwards"
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
        if(inputs[0].value=="Bitmap" || inputs[0].value=="bitmap" || inputs[0].value=="bit map" || inputs[0].value=="Bit map" || inputs[0].value=="BITMAP" || inputs[0].value=="BIT MAP"){
            arrayR[0]="Corretta"
            inputs[0].style.pointerEvents="none";
            inputs[0].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[0]="Sbaglita"
            inputs[0].style.border="solid 1px red";
        }

        if(inputs[1].value=="Pixel Per Inch" || inputs[1].value=="pixel per inch" || inputs[1].value=="pixelperinch" || inputs[1].value=="PixelPerInch" || inputs[1].value=="PIXEL PER INCH" || inputs[1].value=="PIXELPERINCH"){
            arrayR[1]="Corretta"
            inputs[1].style.pointerEvents="none";
            inputs[1].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[1]="Sbaglita"
            inputs[1].style.border="solid 1px red";
        }

        if(inputs[2].value=="24bit" || inputs[2].value=="24Bit" || inputs[2].value=="24 Bit" || inputs[2].value=="24 bit" ||inputs[2].value=="24"){
            arrayR[2]="Corretta"
            inputs[2].style.pointerEvents="none";
            inputs[2].style.border="solid 1px green";
            point+=1;
        }else{
            arrayR[2]="Sbaglita"
            inputs[2].style.border="solid 1px red";
        }

        if(inputs[3].value=="lossy" || inputs[3].value=="Lossy" || inputs[3].value=="LOSSY"){
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
            localStorage.setItem("stato","suono");
        }else{
            casa.style.display="none"
            Rfai.style.display="block"
        }
        localStorage.setItem("imgPoint",point);
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
