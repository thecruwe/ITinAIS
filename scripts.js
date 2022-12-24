var chbx; // выбранное состояние дома
var sel1; // Материалы
var sel12; // Работы, руб
var sel2; // выбранный уровень дома
var pl; // набранная площадь дома
var sum; // итоговая стоимость строительства дома
var select = document.querySelector('material_house');
var input;
var rab12;
var mat1;


function fun1() {
    sel1=document.getElementById('material_house').selectedIndex;
    var options=document.getElementById('material_house').options;
    if (options[sel1].value == 'obr') {
        sel12 = 206624; // Стоимость работы
        sel1 = 309935; //Стоимость материала
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'pbr') {
        sel12 = 190729;
        sel1 = 286094;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'kbr') {
        sel12 = 192319;
        sel1 = 288478;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'lstk') {
        sel12 = 155762;
        sel1 = 233644;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'kir') {
        sel12 = 190729;
        sel1 = 286094;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'gbet') {
        sel12 = 158941;
        sel1 = 238412;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'dkark') {
        sel12 = 154173;
        sel1 = 231259;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'brns') {
        sel12 = 119206;
        sel1 = 178809;
        rab12 = 10331;
        mat1 = 15497;
    } else if (options[sel1].value == 'brstrg') {
        sel12 = 127153;
        sel1 = 190729;
        rab12 = 10331;
        mat1 = 15497;
    } else {
        return;
    } 
    console.log(sel1);
}

function fun2() {
    sel2=document.getElementById('house_class').selectedIndex;
    var options=document.getElementById('house_class').options;
    if (options[sel2].value == 'eco') {
        sel2 = sel12;
    } else if (options[sel2].value == 'standart') {
        sel2 = (sel12 * 1.39999710).toFixed(0);
    } else if (options[sel2].value == 'luks') {
        sel2 = (sel12 * 1.79999419).toFixed(0);
    } else {
        return;
    } 
    console.log(sel2);
}


function allres() {
    input = document.getElementById("yardage").value;
    sel2 = (Number(sel2) + (input * rab12));
    sel1 = (Number(sel1)+ (input * mat1));
    area3.innerHTML = sel1 + ' руб. - материалы';
    area2.innerHTML = sel2 + ' руб. - работа';
    area1.innerHTML = (sel1 + Number(sel2)) + ' руб. - стоимость строительства частного дома';
    console.log(sel1 + sel2);
}
