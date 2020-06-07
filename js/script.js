function load(){
    var imgp=localStorage.getItem("imgPoint");
    var suop=localStorage.getItem("suoPoint");
    var vidp=localStorage.getItem("vidPoint");
    var statoImg=document.querySelector("#stImg");
    var statoSuo=document.querySelector("#stSuo");
    var statoVid=document.querySelector("#stVid");
    var s1=document.querySelector("#sb-2");
    var s2=document.querySelector("#sb-3");
    var completato=document.querySelector("#comp");
    var st=localStorage.getItem("stato");
    var risP=document.querySelector("#rp");
    if(imgp>=2){
        statoImg.style.animation="none";
        statoSuo.style.animation="shadow-pulse 1s infinite";
        statoSuo.style.backgroundColor="#F15F79"
        localStorage.setItem("stato","suono");
        s1.innerHTML="Sbloccato";
    }

    if(suop>=2){
        statoSuo.style.animation="none";
        statoVid.style.animation="shadow-pulse 1s infinite";
        statoSuo.style.backgroundColor="#F15F79"
        statoVid.style.backgroundColor="#F15F79"
        localStorage.setItem("stato","video");
        s2.innerHTML="Sbloccato";
    }

    if(vidp>=2){
        statoSuo.style.animation="none";
        statoVid.style.animation="none";
        statoVid.style.backgroundColor="#F15F79"
        completato.style.animation="scale-1 0.5s forwards"
    }

    if(st=="completato"){
        risP.style.display="block"
    }

}

function stImg(){
    var err=document.querySelector("#errore");
    var tipoErr=document.querySelector("#paraAlert");
    var cicImg=document.querySelector("#stImg");
    var contni = document.querySelector("#mainContenitore");
    var contni2 = document.querySelector("#contenitore-1");
    var nav = document.querySelector("#nav");
    var resetBtn=document.querySelector("#reset");
    st=localStorage.getItem("stato");
    if(st=="suono" || st=="video"){
        tipoErr.innerHTML="Hai gia superato questa sezione, Se vorresti rifarla resetta i progressi..."
        err.style.animation="scale-1 1s forwards"
        contni.style.pointerEvents="none";
        contni2.style.filter="blur(2px)";
        nav.style.filter="blur(2px)";
        cicImg.setAttribute("href","#");
        resetBtn.style.display="block"
    }else{
        cicImg.setAttribute("href","./collegamenti/immagini/index.html")
    }
}

function stSuo(){
    var err=document.querySelector("#errore");
    var tipoErr=document.querySelector("#paraAlert");
    var statoSuo=document.querySelector("#stSuo");
    var contni = document.querySelector("#mainContenitore");
    var contni2 = document.querySelector("#contenitore-1");
    var nav = document.querySelector("#nav");
    var resetBtn=document.querySelector("#reset");
    st=localStorage.getItem("stato");

    if(st=="suono"){
        statoSuo.href='./collegamenti/suoni/index.html'
    }else{
        if(st=="img" || st=="video"){
            if(st=="img"){
                tipoErr.innerHTML="Prima di procedere con la sezione Suoni, Devi completare la sezione delle Immagini;)"
                err.style.animation="scale-1 1s forwards"
                contni.style.pointerEvents="none";
                contni2.style.filter="blur(2px)";
                nav.style.filter="blur(2px)";
            }else if(st=="video"){
                tipoErr.innerHTML="Hai gia superato questa sezione, Se vorresti rifarla resetta i progressi..."
                err.style.animation="scale-1 1s forwards"
                contni.style.pointerEvents="none";
                contni2.style.filter="blur(2px)";
                nav.style.filter="blur(2px)";
                resetBtn.style.display="block"
            }
        }else{
            tipoErr.innerHTML="Prima di procedere con la sezione Suoni, Devi completare la sezione delle Immagini;)"
            err.style.animation="scale-1 1s forwards"
            contni.style.pointerEvents="none";
            contni2.style.filter="blur(2px)";
            nav.style.filter="blur(2px)"; 
        }
    }
}

function stVid(){
    var err=document.querySelector("#errore");
    var tipoErr=document.querySelector("#paraAlert");
    var statoVid=document.querySelector("#stVid");
    var contni = document.querySelector("#mainContenitore");
    var contni2 = document.querySelector("#contenitore-1");
    var st=localStorage.getItem("stato");
    if(st=="video"){
        statoVid.href='./collegamenti/video/index.html'
    }else{
        tipoErr.innerHTML="Prima di procedere con la sezione Video, Devi completare la sezione dei Suoni;)"
        err.style.animation="scale-1 1s forwards"
        contni.style.pointerEvents="none";
        contni2.style.filter="blur(2px)";
        nav.style.filter="blur(2px)";
    }
}

function chiudiErr(){
    var err=document.querySelector("#errore");
    var contni = document.querySelector("#mainContenitore");
    var contni2 = document.querySelector("#contenitore-1");
    err.style.animation="scale-0 .5s forwards"
    contni2.style.filter="none";
    contni.style.pointerEvents="auto";
    nav.style.filter="none";
}

function resetta(){
    localStorage.removeItem("imgPoint");
    localStorage.removeItem("suoPoint");
    localStorage.removeItem("vidPoint");
    localStorage.removeItem("stato");
    location.reload();
}

function rp(){
    var completato=document.querySelector("#comp");
    localStorage.removeItem("stato");
    localStorage.removeItem("imgPoint");
    localStorage.removeItem("suoPoint");
    localStorage.removeItem("vidPoint");
    completato.style.transformScale="0"
    location.reload();
}