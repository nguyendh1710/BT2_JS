// Bài 1: QUẢN LÝ TUYỂN SINH

// Hàm tính điểm ưu tiên theo khu vực
function diemkhuvuc() {
  let radioA = document.getElementById("A");
  let radioB = document.getElementById("B");
  let radioC = document.getElementById("C");
  let radioX = document.getElementById("X");
  let scoreArea = 0;
  if (radioA.checked) {
    scoreArea = 2 ;
    
  } 
  else if (radioB.checked) {
    scoreArea = 1 ;
  } 
  else if(radioC.checked) {
    scoreArea = 0.5 ;
  } 
  else if(radioX.checked) {
    scoreArea = 0 ;
  } 
  else {
    alert("Vui lòng chọn khu vực")
  }

  return scoreArea;
  }
  


// Hàm tính điểm ưu tiên theo đối tượng
function diemdoituong() {

  let radio1 = document.getElementById("1");
  let radio2 = document.getElementById("2");
  let radio3 = document.getElementById("3");
  let radio0 = document.getElementById("0");
  let scoreP = 0;
  if (radio1.checked) {
     scoreP = 2.5 ;
    
  } 
  else if (radio2.checked) {
     scoreP = 1.5 ;
  } 
  else if(radio3.checked) {
     scoreP = 1 ;
  }
  else if(radio0.checked) {
     scoreP = 0 ;
  }  
  else {
    alert("Vui lòng chọn đối tượng")
  }
   return scoreP;
  }
// Hàm tính tổng  điểm
function diemtong(){
  let score1 = +document.getElementById("input-score1").value;
  let score2 = +document.getElementById("input-score2").value;
  let score3 = +document.getElementById("input-score3").value;
  let diemkv = diemkhuvuc();
  let diemdt = diemdoituong();
  let scoreAll =0;
  if(score1 === 0 || score2 === 0 || score3 === 0){

    alert("Kết quả rớt");
  }
    else{
  scoreAll = score1 + score2 + score3 + diemkv + diemdt;
    }
 return scoreAll;
}
// Hàm xét đậu rớt
function ex1(){
 
  let score = +document.getElementById("input-score").value;  
  let sosanh = diemtong();
    if (sosanh >= score){

          
      alert("Kết quả đậu");
     

    }
    else {


      alert("Kết quả rớt");


    }
  }


// Bài 2: Tính tiền điện

function ex2(){

    let hoTen = document.getElementById("input_hoten");
    let kw = +document.getElementById("input_kw").value;
    let pay = 0;
    
    if (kw <= 50) {
      pay += 500*kw;
    } 
    else if (kw <= 100) {
      pay += 500*50 + 650*(kw - 50);
    }
    else if (kw <= 200) {
      pay += 500*50 + 650*50 + 850*(kw-100);
    }
    else if (kw <= 350) {
      pay += 500*50 + 650*50 + 850*100 + 1100* (kw-200);
    }
    
    else {
      pay += 500*50 + 650*50 + 850*100 +1100*150 + (kw-350)*1300;
    }
  
    
    alert("Tiền điện của bạn là: "+ pay.toLocaleString());
 }
// Bài 3: Tính thuế thu nhập cá nhân
function ex3(){

  let incometax = beforeTax();
  let tax = 0;
  
  if (incometax <= 60) {
    tax += 0.05*incometax;
  } 
  else if (incometax <= 120) {
    tax += 0.05*(60e+6) +(incometax-(60e+6))*0.1 ;
  }
  else if (incometax <= 210) {
    tax += 0.05*(60e+6) + 0.1*(60e+6)+(incometax-(120e+6))*0.15 ;
  }
  else if (incometax <= 384) {
    tax += 0.05*(60e+6) + 0.1*(60e+6) + (90e+6)*0.15 + (incometax-(210e+6))*0.2 ;
  }
  else if (incometax <= 624) {
    tax += 0.05*(60e+6) + 0.1*(60e+6) + (90e+6)*0.15 + (174e+6)*0.2 + (incometax-(384e+6))*0.25;
  }
  else if (incometax <= 960) {
    tax += 0.05*(60e+6) + 0.1*(60e+6) + (90e+6)*0.15 + (174e+6)*0.2 + (240e+6)*0.25 + (incometax-(624e+6))*0.3;
  }
  
  else {
    tax += 0.05*(60e+6) + 0.1*(60e+6) + (90e+6)*0.15 + (174e+6)*0.2 + (240e+6)*0.25 + (336e+6)*0.3 + (incometax-(960e+6))*0.35;
  }

  
  alert("Tiền thuế của bạn là: "+ tax.toLocaleString());
 }
 function beforeTax(){

  let income = +document.getElementById("input_income").value;
  let per = +document.getElementById("input_per").value;
  
      
  let bfTax = income - (4e+6) - per*(1.6e+6);

   return bfTax;
}


 
 //Bài 4:Tính tiền cáp 


function changed()
{
    var message = document.getElementById('show_message');
    
    var giatrichange = document.getElementById('gender').value;
    if (giatrichange === ''){
        message.innerHTML = "Bạn chưa chọn loại khách hàng";
    }
    else if (giatrichange === 'dn'){
      message.style.display = "block";
    }
    else if (giatrichange === 'nd'){
      message.style.display = "none";
    }
    return  giatrichange;
}
function soketnoi(){
  let sodauketnoi = +document.getElementById("show_message").value;
  let giadauketnoi = 0;
  if(sodauketnoi <= 10){
     
    giadauketnoi += 75*sodauketnoi;
  }
  else{
    giadauketnoi += 75*10 + (sodauketnoi - 10)*80;

  }

 return giadauketnoi;

}
function ex4(){

  let option = changed();
  
  giatiendauketnoi = soketnoi();
  let sokenh = +document.getElementById("input_chan").value;
  let tiencap = 0;
  
  if (option === 'dn') {
    tiencap += 15 + giatiendauketnoi + 50*sokenh;
  } 
  else if (option === 'nd') {
    tiencap += 4.5 +20.5 + 7.5*sokenh;
  }
  else if (option === '') {
    alert("Vui lòng nhập đủ thông tin: ");
  }
  
  alert("Tiền cáp của bạn theo $ là: "+ tiencap.toLocaleString());
 }
