let subMenu = document.querySelector('.nav_sub_menu')
let menuBar = document.querySelector('.nav_menu')
let nav = document.querySelector('nav')

menuBar.addEventListener('mouseenter',function(){
    subMenu.classList.add('active_top')
})
nav.addEventListener('mouseleave',function(){
    subMenu.classList.remove('active_top')
})
//서브 메뉴바 끝

//왼쪽 메뉴 시작
let leftMenu = document.querySelector('.left_menu')
let hamBtn = document.querySelector('.ham_btn')
let XBtn = document.querySelector('.X_btn')
let header =document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')

hamBtn.addEventListener('click',function(){
    leftMenu.classList.add('left_menu_width')
    header.style.opacity = 0.3
    main.style.opacity = 0.3
    footer.style.opacity = 0.3
})
XBtn.addEventListener('click',function(){
    leftMenu.classList.remove('left_menu_width')
    header.style.opacity = 1
    main.style.opacity = 1
    footer.style.opacity = 1
})
//왼쪽 메뉴 끝

//왼쪽 메뉴 아코디언 시작

let leftMenuH1s = document.querySelectorAll('.left_menu_h1')
let leftMenuList = document.querySelectorAll('.left_menu_list')

leftMenuH1s.forEach(function(leftmenuH1){
    leftmenuH1.addEventListener('click',function(){ 
        let leftList = leftmenuH1.nextElementSibling 
        if (leftList.style.maxHeight) {
            leftList.style.maxHeight = null;
          } else {
            leftList.style.maxHeight = leftList.scrollHeight + "px";
          }
    })
})
//왼쪽 메뉴 아코디언 끝
//개인정보 취급, 이용 안내 onclick 시작
let Instructions = document.querySelector('.Instructions')
let PersonalInformation = document.querySelector('.PersonalInformation')

Instructions.addEventListener('click',function(){
    window.open('instructions.html','_blank','width:500,height:500px')
})
PersonalInformation.addEventListener('click',function(){
    window.open('information.html','_blank','width:500,height:500px')
})

//이용 안내 onclick 끝

