let moon =document.querySelector('.moon')
let sun = document.querySelector('.sun')
let icon = document.getElementById('icon')
let body = document.getElementById('body')
let header = document.getElementById('header')
let f_c =document.querySelectorAll(".f-c")
let s_c =document.querySelectorAll('.s-c')
let code_div =document.querySelectorAll('.code-div')

moon.onclick=function(){
    moon.style.display="none"
    sun.style.display="block"
    body.style=" background-color:rgb(19,20,21);"
    header.style=" background-color:rgb(19,20,21);"

    for(let i=0;i<f_c.length;i++){
        f_c[i].style="color:white;"
    }
    for(let i=0;i<s_c.length;i++){
        s_c[i].style="color:rgb(255,231,122);"
    }
    for(let i=0;i<code_div.length;i++){
        code_div[i].style="background-color:rgb(46, 46, 46);"
    }
}

sun.onclick=function(){
    sun.style.display="none"
    moon.style.display="block"
    body.style="background-color:white;"
    header.style=" background-color:white;"
    for(let i=0;i<f_c.length;i++){
        f_c[i].style="color:black;"
    }
    for(let i=0;i<s_c.length;i++){
        s_c[i].style="color:rgb(4,147,211);"
    }
    for(let i=0;i<code_div.length;i++){
        code_div[i].style="background-color:rgb(247, 247, 247);"
    }
}



// 