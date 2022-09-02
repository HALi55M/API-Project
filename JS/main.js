
// Slider List
let effectBtnOne = document.querySelector('#effectBtnOne');
let effectBtn = document.querySelector('#effectBtn');
let changer = $('.content-box').innerWidth();
$('#sliderList').animate({left:`-${changer}`});
$('.icon-button i').click(function () {
    if( $('#sliderList').css('left') == '0px' )   
    {
    $('#sliderList').animate({left:`-${changer}`} , 500); 
    $('#element1').animate({bottom:'-250px'} , 500);
    $('#element2').animate({bottom:'-250px'} , 1000);
    $('#element3').animate({bottom:'-250px'} , 1000);
    $('#element4').animate({bottom:'-250px'} , 1000);
    $('#element5').animate({bottom:'-250px'} , 1000);
    $('#element6').animate({bottom:'-250px'} , 1000);
    effectBtnOne.classList.replace('d-none' , 'd-inline-block');
    effectBtn.classList.add('d-none');

    }
    else
    {
        $('#sliderList').animate({left:`0px`} , 500);
        $('#element1').animate({bottom:'50px'} , 2500);
        $('#element2').animate({bottom:'100px'} , 2100);
        $('#element3').animate({bottom:'150px'} , 1700);
        $('#element4').animate({bottom:'200px'} , 1300);
        $('#element5').animate({bottom:'250px'} , 1000);
        $('#element6').animate({bottom:'300px'} , 500);
        effectBtn.classList.replace('d-none' , 'd-inline-block');
        effectBtnOne.classList.add('d-none');
    }
})

// Section News Page 

 let dataList =[];
async function getDateApi() {
    let response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3LGoJiWIlOdFGsFIyg98d7SxHfooJyt93eDvxJaLaj3DY-8vX-CrhK-i8");
    let finalResult = await response.json();
    dataList = finalResult.results ;
    displsyDate();
}
getDateApi();
 function displsyDate() {
     let container =``
     dataList.forEach(element => {
     container+= ` <div class="col-md-4 py-5">
     <div class="item ">
         <img class="w-100 h-100" src="image/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="" srcset="">
         <div class="layer text-center d-flex flex-column justify-content-center align-items-center">
             <h3>${element.original_title}</h3>
             <p>${element.release_date} </p>
         </div>
     </div>
 </div>`     
     });
    document.querySelector('#dataList').innerHTML = container;
 }





















 let searchInput = document.querySelector('#searchInput');
 searchInput.addEventListener('input', function(){
    console.log('hello')
 })
































// LogIn
let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userPhone = document.querySelector('#userPhone');
let userAge = document.querySelector('#userAge');
let userPassword = document.querySelector('#userPassword');
let userRePassword = document.querySelector('#userRePassword');
let testWindow =document.querySelector('#test');
let testWindow2 =document.querySelector('#test2');
let userFullDate = [];

 $('#submit').click(function () {
    let file = {
        name: userName.value,
        email: userEmail.value,
        phone : userPhone.value,
        age : userAge.value,
        pass : userPassword.value,
        rePass : userRePassword.value
    }
    userFullDate.push(file);
     localStorage.setItem( 'myfile',JSON.stringify(userFullDate));
     clearForm();
 })

 function clearForm(){
    userName.value ="";
    userEmail.value ="";
    userPhone.value ="";
    userAge.value ="";
    userPassword.value = "";
    userRePassword.value ="";
 }

 $('#userName').focus(function () {
    testWindow.classList.replace('d-none' , 'd-in-line-block');
})
$('#userEmail').focus(function () {
    testWindow2.classList.replace('d-none' , 'd-in-line-block');
})

