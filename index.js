const mainNumber = document.querySelector("#main-number")
const convertBtn = document.querySelector("#convert-btn")
const conversion1 = document.querySelector("#conversion1")
const conversion2 = document.querySelector("#conversion2")
const conversion3 = document.querySelector("#conversion3")



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener("click", function(){ 
    convert("meters","feet",3.281)

})


function convert(metric,impariel,valueOfMetric){

    let input =  mainNumber.value

     let result1 = input*valueOfMetric
     let result2 = input/valueOfMetric

     let output = `${input} ${metric}= ${result1.toFixed(3)} ${impariel} | ${input} ${impariel} = ${result2.toFixed(3)} ${metric}`

    conversion1.textContent = output


    
}

