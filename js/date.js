function date(){
  var today=new Date()
  var dd=today.getDate()
  var mm=today.getMonth()+1
  var yy=today.getFullYear()
  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  
  return (dd+" "+"February"+" "+yy);  
  }
document.getElementById("date").innerHTML = date();