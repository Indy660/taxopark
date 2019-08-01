
let placeNameAutoPark = document.querySelector("#nameAutoPark");
let container=document.querySelector(".container");



let modelList=['Toyota', 'Ferrari', 'Lada', 'BMW', 'Mercedes', 'Seat', 'Nissan', 'Renault', 'Volkswagen', 'Aston Martin', 'Jaguar', 'Porsche', 'Kia', 'Mazda', 'Jeep' ];

function randModel(){
    let i = Math.floor(Math.random()*modelList.length-0.000001);
    return modelList[i];
}
function rgb() {
    let a=Math.floor(Math.random()*256-0.000001);
    let b=Math.floor(Math.random()*256-0.000001);
    let c=Math.floor(Math.random()*256-0.000001);
    return "rgb("+a+","+b+","+c+")";
}


function Car(){
    let n = Math.floor(Math.random()*1000);
    if(n>=10 && n<100) {n="0"+n}
    if(n<10) {n="00"+n}
    this.number =n;             //номер
    this.color = rgb();         //цвет, ссылка на функцию выше
    this.model = randModel();   //марка, ссылка на функцию выше
    this.reportNum = function(){
        console.log("Номер:"+this.number)
    }

}

function Taxopark(name,n){
    this.name =name;
    this.numberOfCars = n;

    let park=[];
    for (let i=0; i<n; i++) {
        park.push(new Car());   //пушим n машин по конструктуру выше
    }
    this.avtopark=park;
}

// j['avtopark'][5]['reportNum']() === j.avtopark[5].reportNum()

function render(tp){
   placeNameAutoPark.innerHTML="";
    container.innerHTML="";
    container.style.backgroundImage="url('http://junior3d.ru/texture/%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%B0/%D0%90%D1%81%D1%84%D0%B0%D0%BB%D1%8C%D1%82/%D0%B0%D1%81%D1%84%D0%B0%D0%BB%D1%8C%D1%82_4.jpg')";
    for (let i=0; i<tp.numberOfCars; i++) {
        container.innerHTML += '<div class="cars" style="background-color:'+tp.avtopark[i].color+'">' +tp.avtopark[i].model+
            '<div class="wheels"></div><div class="wheels"></div><div class="wheels"></div><div class="wheels"></div><div id="roof" style="background-color:+tp.avtopark[i].color+">' +
            '</div><div class="glasses"></div><div class="glasses"></div><div class="glasses"></div><div class="glasses"></div>' +
            '<div class="lights l'+i+'"></div><div class="lights l'+i+'"></div>'+ "<br \/>"+tp.avtopark[i].number +'</div>';
        turnOffLights(i)
    }
  placeNameAutoPark.innerHTML+=document.querySelector("#name").value;
    function returnSpanTags(string, id) {
        let arr = string.split("");
        let newArr = arr.map(function (elem, index) {
            return "<span id=" + index + ">" + elem + "<span>";
        });
        let newString = newArr.join('');
        let target = document.getElementById(id);
        target.innerHTML = newString;   //вставляем нужную строку, разбитую на айдишники

        let color = {};
        for (let i = 0; i < newArr.length; i++) {
            color[i] = document.getElementById(i);
            changeColors(color[i], "color", 360 / newArr.length * i, 10) //присваем функцию по смене цвета
        }
    }
        returnSpanTags(document.querySelector("#name").value, "nameAutoPark");
}

function createCars(){
    let nameAutopark = document.querySelector("#name").value;
    let numbers = document.querySelector("#value").value;
    render(new Taxopark(nameAutopark, numbers));
}

function changeColors(element, colorRule, initialHue, timeout) {
    setInterval(function () { element.style[colorRule] = `hsl(${++initialHue % 360},100%,50%)`}, timeout)
}
function turnOffLights(n){
    let timerId = setInterval(function() {
        document.querySelectorAll('.l'+n)[0].style.backgroundColor="rgb(55, 55, 4)";    document.querySelectorAll('.l'+n)[1].style.backgroundColor="rgb(55, 55, 4)";
        setTimeout(function(){
            document.querySelectorAll('.l'+n)[0].style.backgroundColor="yellow";    document.querySelectorAll('.l'+n)[1].style.backgroundColor="yellow"
        },Math.random()*7000+2000);     //насколько долго

    }, Math.random()*9000+1000);        //через сколько будут светить
    return timerId
   // let timerID2=setInterval(function() {timerId}, time);
   //  document.querySelectorAll('.l0')[0].style.backgroundColor = "aqua"
}



function Person(sv,zn){
    this[sv] = zn;
}

chel1= new Person('rost',185);
/*
console.log(chel1.rost)*/

