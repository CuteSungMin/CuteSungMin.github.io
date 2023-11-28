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

//월별 소식 안내 스크롤 시작
let monthEvent = document.querySelector('.month_event')
let monthEventTop = monthEvent.offsetTop

window.addEventListener('scroll',function(){
    if(monthEventTop - 800 <= window.scrollY){
        monthEvent.classList.add('month_event_scroll')
    }else if(monthEventTop - 800 != window.scrollY){
        monthEvent.classList.remove('month_event_scroll')   
    }
})
//월별 소식 안내 스크롤 시작

//클럽 안내 예약 시작
let clubReser = document.querySelector('.club_reservation')
let clubReserTop = clubReser.offsetTop

window.addEventListener('scroll',function(){
    if(clubReserTop - 700  <= window.scrollY){
        clubReser.classList.add('club_reservation_left')
    }else if(clubReserTop - 700 != window.scrollY){
        clubReser.classList.remove('club_reservation_left')   
    }
})
//클럽 안내 예약 시작

//클럽 안내 코스 시작
let clubCourse = document.querySelector('.club_course')
let clubCourseTop = clubCourse.offsetTop

window.addEventListener('scroll',function(){
    if(clubCourseTop - 700  <= window.scrollY){
        clubCourse.classList.add('club_course_right')
    }else if(clubCourseTop - 700 != window.scrollY){
        clubCourse.classList.remove('club_course_right')   
    }
})
//클럽 안내 코스 끝

//클럽 안내 코스2 시작
let clubCourse2 = document.querySelector('.club_course_2')
let clubCourse2Top = clubCourse2.offsetTop

window.addEventListener('scroll',function(){
    if(clubCourse2Top - 700  <= window.scrollY){
        clubCourse2.classList.add('club_course_2_left')
    }else if(clubCourse2Top - 700 != window.scrollY){
        clubCourse2.classList.remove('club_course_2_left')   
    }
})
//클럽 안내 코스2 끝

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

//fixed 달력 시작
let clubCalendar = document.querySelector('.club_calendar')
let calendarClick = document.querySelector('.calendar_click ')
let clickToCalendar = document.querySelectorAll('.click_to_calendar')

calendarClick.addEventListener('click',function(){
    let secId = this.dataset.id
    let sec = document.getElementById(secId).offsetTop
    window.scrollTo(0,sec)
    window.scrollTo({
        left : 0,
        top : sec + -200
        });
});

clickToCalendar.forEach((clickcalendar)=>{
    clickcalendar.addEventListener('click',function(){
        let secId = this.dataset.id
        let sec = document.getElementById(secId).offsetTop
        window.scrollTo(0,sec)
        window.scrollTo({
            left : 0,
            top : sec + -200
            });
    });
})


window.onload = function () { buildCalendar(); }    // 웹 페이지가 로드되면 buildCalendar 실행

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 페이지를 로드한 날짜를 저장
today.setHours(0,0,0,0);    // 비교 편의를 위해 today의 시간을 초기화

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날
    let tbody_Calendar = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신
    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }
    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           
    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }
    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  
        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고
        nowColumn.innerText = leftPad(nowDay.getDate());      // 추가한 열에 날짜 입력
        if (nowDay.getDay() == 0) {                 // 일요일인 경우 글자색 빨강으로
            nowColumn.style.color = "#DC143C";
        }
        if (nowDay.getDay() == 6) {                 // 토요일인 경우 글자색 파랑으로 하고
            nowColumn.style.color = "#dc143c";
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }
        if (nowDay < today) {                       // 지난날인 경우
            nowColumn.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            nowColumn.className = "today";
            nowColumn.onclick = function () { choiceDate(this); }
        }
        else {                                      // 미래인 경우
            nowColumn.className = "futureDay";
            nowColumn.onclick = function () { choiceDate(this); }
        }
    }
}
// 날짜 선택
function choiceDate(nowColumn) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
    let choiceReservation = document.querySelector('.choiceDay')
    let allTimeReservation = document.querySelector('.all_time_reservation')
    let reservationDay = choiceReservation.innerText
    allTimeReservation.innerHTML = reservationDay + '일'
    
}
// 이전달 버튼 클릭
function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
}
// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    }
    return value;
}
//fixed 달력 끝----------------------------------------------------------------------
// 달력 옆 인원수 체크 버튼 시작

const peopleBtn = document.querySelectorAll('.all_people_btn');
const peoplePlusBtns = document.querySelectorAll('.people_plus_btn');
const peopleMinusBtns = document.querySelectorAll('.people_minus_btn');

let peopleBtnInput = document.querySelector('.all_people_btn>input')
peopleBtn.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
        let t = e.target;
        if(t == peopleMinusBtns[i]){
            minusFuncPeople(t)
            }else if(t == peoplePlusBtns[i]){
                plusFuncPeople(t)
            }
    })
});
function minusFuncPeople(t){
    const next = t.previousElementSibling;
    if(next.value > 0){
        next.value--;
    }
}
function plusFuncPeople(t){
    const prev = t.nextElementSibling;//이전 자식을 불러옴
    if(prev.value < 10){
    prev.value++;
    }
}

// 달력 옆 인원수 체크 버튼 끝