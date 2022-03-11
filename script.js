const classList2 = []

classList1.forEach((x, index) =>{
  classList2.push({
    "id": x.Id,
    "Name": x.Name,
    "Matric": x.Matric,
    'COS103': Random(25, 70), 
    'COS105': Random(30, 70),
    'GSP101': Random(40, 70),
    'GSP111': Random(30, 70),
    'MTH111': Random(30, 70), 
    'MTH121': Random(15, 80),
    'PHY115': Random(30, 65),
    'STA131': Random(30, 65)

  
  })
})


function Random(a, b){
 var temp1 = Math.floor((Math.random() + Math.random() + Math.random() + Math.random())*(a+1))
  if (temp1 > (a*2)){temp1 /= 4}
  else if(temp1 > a){temp1 /= 2}

 var temp2 = Math.floor((Math.random() + Math.random() + Math.random() + Math.random())*(b+1))
  if (temp2 > (b*2)){temp2 /= 4}
  else if(temp2 > b){temp2 /= 2}

  return [Math.floor(temp1), Math.floor(temp2)]
}