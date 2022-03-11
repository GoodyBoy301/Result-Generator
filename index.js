const matric = document.querySelector('#matric');
const label = document.querySelector('#label')
const form = document.querySelector('form')
const btn = document.querySelector("#view")
const body = document.querySelector(".body")
const head = document.querySelector(".head")
const shuffle = document.querySelector(".shuffle")
const arrow = document.querySelector('.arrow')

const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')
const h5 = document.querySelector('h5')
const load = document.querySelectorAll('.load')
const cos = document.querySelectorAll('.cos')
const ca = document.querySelectorAll('.ca')
const ex = document.querySelectorAll('.ex')
const total = document.querySelectorAll('.total')
const grade = document.querySelectorAll('.grade')


setInterval(function(){
  if(matric.value === "2020"){matric.value = "2020/"}
}, 300)

form.addEventListener("submit", function(){
  event.preventDefault()
  view.style.position = "relative"
  //view.style.top = 'calc(6.5em - 50vh)'
var found = classList2.find(checkMatric)

  //body.className+=" movebody"
  if(btn.innerHTML === "View Result" && found){
    body.style.transform = "translateY(0vh)"
    head.style.transform = "translateY(0vh)"
    shuffle.style.display = "none"
    view.className+=" btnup";
    btn.innerHTML = "<< Return"
    matric.blur()
    display(matric.value)
  }else if (btn.innerHTML === "View Result" && !found){
    setTimeout(function(){
     label.style.color = "white"
     label.innerHTML = "Enter Your Matric Number"
    matric.focus()
      },1500)

    label.innerHTML = "invalid Matric Number"
    matric.blur()
   label.style.color = "#bc4749"
    form.reset()
  
  }else{
    body.style.transform = "translateY(100vh)"
    head.style.transform = "translateY(100vh)"
    shuffle.style.display = "block"
    view.className="";
    btn.innerHTML = "View Result"
    //matric.focus()
    form.reset()
  }
  
})

shuffle.addEventListener("click", function(){
 matric.value = classList2[Math.floor(Math.random() * 193)].Matric
 //console.log(classList2[Math.floor(Math.random() * 193)])
})

function display(matrix) {
 classList2.forEach((x, index) => {
   if (matrix === x.Matric){
     h3.innerHTML = x.Name
     h4.innerHTML = x.Matric

    load[1].innerHTML = "3"
    load[2].innerHTML = "2"
    load[3].innerHTML = "2"
    load[4].innerHTML = "2"
    load[5].innerHTML = "3"
    load[6].innerHTML = "3"
    load[7].innerHTML = "2"
    load[8].innerHTML = "2"
    
     ca[1].innerHTML = x.COS103[0]
     ca[2].innerHTML = x.COS105[0]
     ca[3].innerHTML = x.GSP101[0]
     ca[4].innerHTML = x.GSP111[0]
     ca[5].innerHTML = x.MTH111[0]
     ca[6].innerHTML = x.MTH121[0]
     ca[7].innerHTML = x.PHY115[0]
     ca[8].innerHTML = x.STA131[0]

     ex[1].innerHTML = x.COS103[1]
     ex[2].innerHTML = x.COS105[1]
     ex[3].innerHTML = x.GSP101[1]
     ex[4].innerHTML = x.GSP111[1]
     ex[5].innerHTML = x.MTH111[1]
     ex[6].innerHTML = x.MTH121[1]
     ex[7].innerHTML = x.PHY115[1]
     ex[8].innerHTML = x.STA131[1]

     total[1].innerHTML = Number(x.COS103[0]) + Number(x.COS103[1]) 
     total[2].innerHTML = Number(x.COS105[0]) + Number(x.COS105[1])
     total[3].innerHTML = Number(x.GSP101[0]) + Number(x.GSP101[1])
     total[4].innerHTML = Number(x.GSP111[0]) + Number(x.GSP111[1])
     total[5].innerHTML = Number(x.MTH111[0]) + Number(x.MTH111[1])
     total[6].innerHTML = Number(x.MTH121[0]) + Number(x.MTH121[1])
     total[7].innerHTML = Number(x.PHY115[0]) + Number(x.PHY115[1])
     total[8].innerHTML = Number(x.STA131[0]) + Number(x.STA131[1])

    grade.forEach((grd, inde) => {
     if (total[inde] !== "Grade" && Number(total[inde].innerHTML) > 69){
      grd.innerHTML = "A"
      grd.score = 5 * Number(load[inde].innerHTML)
     }else if(total[inde] !== "Grade" && Number(total[inde].innerHTML) > 59){
      grd.innerHTML = "B"
      grd.score = 4 * Number(load[inde].innerHTML)
     }else if(total[inde] !== "Grade" && Number(total[inde].innerHTML) > 49){
      grd.innerHTML = "C"
      grd.score = 3 * Number(load[inde].innerHTML)
     }else if(total[inde] !== "Grade" && Number(total[inde].innerHTML) > 44){
      grd.innerHTML = "D"
      grd.score = 2 * Number(load[inde].innerHTML)
     }else if(total[inde] !== "Grade" && Number(total[inde].innerHTML) > 39){
      grd.innerHTML = "E"
      grd.score = 1 * Number(load[inde].innerHTML)
     }else if(total[inde] !== "Grade" && Number(total[inde].innerHTML) < 40){
      grd.innerHTML = "F"
      grd.score = 0
     }
    })


    //var y = Number(grade[1].score + grade[2].score + grade[3].score + grade[4].score + grade[5].score = grade[6].score + grade[7].score + grade[8].score)
    h5.innerHTML = ((Number(grade[1].score) + Number(grade[2].score) + Number(grade[3].score) + Number(grade[4].score) + Number(grade[5].score) + Number(grade[6].score) + Number(grade[7].score) + Number(grade[8].score))/19).toFixed(2)
   }
   
 })
}


function checkMatric(mat){
   return mat.Matric === matric.value
}

arrow.addEventListener('click', function(){
   location.assign("https://twitter.com/__Urama");
})
