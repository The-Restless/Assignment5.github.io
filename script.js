window.onload = () => {
    let bmi_btn = document.querySelector("#bmi_btn");
    let cel_btn = document.querySelector("#cel_btn");
    let fah_btn = document.querySelector("#fah_btn");
    let pnt_btn = document.querySelector("#pnt_btn");
  
   //listeners
    bmi_btn.addEventListener("click", calculateBMI);
    cel_btn.addEventListener("click", celConverter);
    fah_btn.addEventListener("click", fahConverter);
    pnt_btn.addEventListener("click", numberGame);
};


function celConverter() {
    

    /*F = C(9/5) + 32*/
    let cels = parseInt(document.querySelector("#celsius").value);
    let result = document.querySelector("#result1");

    let fartemp = (cels * 9/5 + 32).toFixed(2) + "°F";

    result.innerHTML = `<span>${cels}</span>°C is <span>${fartemp}</span>`;
    console.log(`${cels}°C is ${fartemp}`);


}

function fahConverter() {

    /* C = (F-32) (5/9)*/

    let fah = parseInt(document.querySelector("#fahrenheit").value);
    let result = document.querySelector("#result2");

    let celtemp = ((fah - 32) * 5 / 9).toFixed(2) + "°C";

    result.innerHTML = `<span>${fah}</span>°F is <span>${celtemp}</span>`;
    console.log(`${fah}°F is ${celtemp}`); 
}



    // BMI = MASS / (HEIGHT * HEIGHT)

    // caculate BMI for Lucas and John, store BMI value in their variables.

    //     LucasBMI, JohnBMI
    //lucasHigherBMI =?;

    // 80KG 1.78m
    // 90kg 1.88m

    //weight
    let lucasW = 176.37;
    let johnW = 198.416;

    //height
    let lucasH = 5.839895;
    let johnH = 6.167979;


    //bmi cal
    function minical(h, w){
        let minibmi = (w/h ^2 * 703).toFixed(2);

        return minibmi;
    }

    let johnBMI = minical(johnH, johnW); 
    let LucasBMI = minical(lucasH, lucasW);

    let lucasHigherBMI = `Lucas'BMI is higher than John's!`; 
    let johnsHigherBMI = `John's BMI is higher than Lucas'!`; 

    if (johnBMI > LucasBMI){
        console.log(johnsHigherBMI);
    } else { 
        console.log(lucasHigherBMI);
    }

    

  
function calculateBMI() {
  
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result3");

    
  
     
      let bmi = minical(height, weight);

      if (bmi < 18.6) 
        result.innerHTML =`Under Weight : <span>${bmi}</span>`;
          
  
      else if (bmi >= 18.6 && bmi < 24.9) 
          result.innerHTML = `Normal : <span>${bmi}</span>`;
              
  
      else result.innerHTML =`Over Weight : <span>${bmi}</span>`;
            
}


function numberGame() {
    let num = parseInt(document.querySelector("#number").value);
    let result = document.querySelector("#result4");
 

    if (num === "" || isNaN(num)){
        result.innerHTML = `Please enter a number!`;
        console.log(`Please enter a number!`);

    }else if (num == "10" || num == "8") {
        result.innerHTML = `You win <span>${num}</span> points!`;
        console.log(`You win ${num} points!`);
    }else {
        result.innerHTML = `NOT MATCHED!!`;
        console.log(`NOT MATCHED!!`);
    }

}