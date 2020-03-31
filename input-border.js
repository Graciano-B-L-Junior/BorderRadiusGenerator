var border = document.getElementsByTagName("input");
var borda = document.getElementById("radius");
var text = document.getElementsByTagName("textarea");

borda.style.borderTopLeftRadius= border[0].value+'px';
borda.style.borderTopRightRadius= border[1].value+'px';
borda.style.borderBottomLeftRadius= border[2].value+'px';
borda.style.borderBottomRightRadius= border[3].value+'px';

border[0].addEventListener('keyup', (event)=>{
    if(border[0].value.length==0){
        border[0].value[0]=event.key
    }else{
        border[0].value[1]=event.key
    }
    borda.style.borderTopLeftRadius= border[0].value+'px';
    text[0].value =`border: ${border[0].value}px ${border[1].value}px ${border[3].value}px ${border[2].value}px`
})
border[1].addEventListener('keyup', (event)=>{
    if(border[1].value.length==0){
        border[1].value[0]=event.key
    }else{
        border[1].value[1]=event.key
    }
    text[0].value =`border: ${border[0].value}px ${border[1].value}px ${border[3].value}px ${border[2].value}px`
    borda.style.borderTopRightRadius= border[1].value+'px';
})

border[2].addEventListener('keyup', (event)=>{
    if(border[2].value.length==0){
        border[2].value[0]=event.key
    }else{
        border[2].value[1]=event.key
    }
    text[0].value =`border: ${border[0].value}px ${border[1].value}px ${border[3].value}px ${border[2].value}px`
    borda.style.borderBottomLeftRadius= border[2].value+'px';
})
border[3].addEventListener('keyup', (event)=>{
    if(border[3].value.length==0){
        border[3].value[0]=event.key
    }else{
        border[3].value[1]=event.key
    }
    text[0].value =`border: ${border[0].value}px ${border[1].value}px ${border[3].value}px ${border[2].value}px`
    borda.style.borderBottomRightRadius= border[3].value+'px';
})


