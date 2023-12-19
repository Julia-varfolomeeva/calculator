let a = '';//первое число
let b = '';//второе число
let sign = '';// знак операции
let finish = false;


const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/'];

//экран
const out = document.querySelector('.tablo-v');

function clearAll(){
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;//чистит все при нажатии

 document.querySelector('.claviature').onclick = (event) => {
    if (!event.target.classList.contains('number')) return;//проверяет нажата кнопка с классом number или поле между кнопками 
    if (event.target.classList.contains('ac')) return;//нажата кнопка clearAll
    out.textContent = '';//помещает пустоту вместо контента
    
    
    
    //получаю нажатую кнопку
    const key = event.target.textContent;//получает контент записанный на нажатой кнопке
    
   

    //tсли нажата клавиша 0-9 ил и .
    if (digit.includes(key)) {//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
        if (b === '' && sign === ''){// проверяем условие b-пустой и знак-пустой
          a += key;//собиpает цифры- собирает значение а
        console.log(a, b , sign);
        out.textContent = a;//выводим набранные цифры в табло   
        }
        else if (a!== '' && b!== '' && finish){ // если уже все поля заполнены и закончена функция, но равно не нажато
            b = key;//введенные цифры станут b
            finish = false;// возвращаем все значения, чтобы начал сначала и можно ввести а
            out.textContent = b;

        }
        else{// в случае если a-уже набран и знак нажат , то 
            b += key;// 
            out.textContent = b;
        }
        console.table(a, b, sign);
        return ;
       


    }
    //если нажата клавиши + - / x 
    
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }
        //нажата равно
        if (key === '='){
            if (b === '')
            b = a;
            switch (sign) {
                case '+':
                    a = (+a) + (+b);//конкатенация строк и присваеваем переменной а
                    console.log(a);
                    break;
                    
                case '-':
                     a = a - b;
                   break;
                case 'x':
                    a = a * b;
                    break;
                case '/':
                    if (b === '0'){
                        out.textContent ='ошибка';
                        a = '';
                        b = '';
                        sign = '';
                        return;

                    }
                    a = a / b;
                     break;
            }
            finish = true;
            out.textContent = a;
            console.table(a, b, sign);

        }

 }


























// let c = '';
// let d = '';


// let num = document.querySelectorAll('.number') ;//массив из классов кнопок цифр
// console.log(num);

// num.forEach(function(element){// для каждого элемента массива выполнить функцию при нажатии getNumber;
//     element.onclick = getNumber;
// })

// function getNumber(){
//     let data = this.getAttribute('data');//берет атрибут data 
    
//     let tablo = document.querySelector('.tablo');// связываем с табло
//     tablo.value += data; // в табло добавляется нажатая кнопка
//     c += data;//для переменной "с" присваеваем все что нажато = цифры
    
//     console.log(typeof(c));
   
// let option = document.querySelectorAll('.symbol');// массив из математических знаков
// option.forEach(function(element){
//     element.onclick = number1;// при нажатии на них выполняется функция number1
// })

// function number1(){
//      let a = Number(c);
//      console.log(a);
    

//      tablo.value = ' ';


//         let num2 = document.querySelectorAll('.number') ;//массив из классов кнопок цифр
//          console.log(num2);
//         num2.forEach(function(element){// для каждого элемента массива выполнить функцию при нажатии getNumber;
//          element.onclick = getNumber2;
//         })


//         function getNumber2(){
//         let data2 = this.getAttribute('data');//берет атрибут data 
    
//         let tablo2 = document.querySelector('.tablo');// связываем с табло
//         tablo2.value += data2; // в табло добавляется нажатая кнопка
//         d += data2;//для переменной "d" присваеваем все что нажато = цифры
    
//         console.log(typeof(d));
        
//         let ravno = document.querySelector('.ravno');
//         ravno.onclick = number2;
//         function number2(){
//            let b = Number(d);
//             console.log(b); 
//             let plus = document.querySelector('.plus');
//             let minus = document.querySelector('.minus');
//             let w;
//             let z;
//              if (plus.onclick){
//                 z = a + b; console.log(z);document.querySelector('.tablo').value = z;
//             }

//             if (minus.onclick){
//                 w = a - b; console.log(w);document.querySelector('.tablo').value = w;
//             } 
          
            
              
           
        
//         }
        
     

//     }

    
//     }



   
// }
   
  
    








