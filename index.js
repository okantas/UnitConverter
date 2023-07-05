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
const data=[
    {
        metric: "meter",
        impariel: "feet",
        valueOfMetric: 3.281
    },
    {
        metric: "liters",
        impariel: "gallons",
        valueOfMetric: 0.264

    },
    {
        metric: "kilograms",
        impariel: "pounds",
        valueOfMetric: 2.204

    }

]


convertBtn.addEventListener("click", function(){ 
    //convert("meters","feet",3.281)
     let input =  mainNumber.value

    conversion1.textContent = `${input} ${data[0].metric}= ${(input*data[0].valueOfMetric).toFixed(3)} ${data[0].impariel} | ${input} ${data[0].impariel} = ${(input/data[0].valueOfMetric).toFixed(3)} ${data[0].metric}`
    conversion2.textContent = `${input} ${data[1].metric}= ${(input*data[1].valueOfMetric).toFixed(3)} ${data[1].impariel} | ${input} ${data[1].impariel} = ${(input/data[1].valueOfMetric).toFixed(3)} ${data[1].metric}`
    conversion3.textContent = `${input} ${data[2].metric}= ${(input*data[2].valueOfMetric).toFixed(3)} ${data[2].impariel} | ${input} ${data[2].impariel} = ${(input/data[2].valueOfMetric).toFixed(3)} ${data[2].metric}`

})




    


