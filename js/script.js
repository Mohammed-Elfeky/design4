$(document).ready(function(){
    
  $('#loading').fadeOut(2000,function(){
      $('body').css('overflow','visible')
  })
  
})
let elements={
    all:[
  `<div class="img-container">
  <img src="img/car-german-1.jpeg" class="img-fluid" alt="">
</div>

<div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">

  <div class="tin">
    <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
    <h6 class="text-uppercase">MODEL</h6>
  </div>
  
  <h5 class="invpoly p-2 maintrablueback mainwhite">
    $10,000
  </h5>
</div>

<div class="bar"></div>
 
<div class="d-flex justify-content-between mainwhiteback p-2 atm">
  <p class="m-0"><i class="fas fa-car"></i> sedan</p>
  <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
</div>
  `,
  `<div class="img-container">
  <img src="img/car-german-2.jpeg" class="img-fluid" alt="">
</div>

<div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">

  <div class="tin">
    <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
    <h6 class="text-uppercase">MODEL</h6>
  </div>
  
  <h5 class="invpoly p-2 maintrablueback mainwhite">
    $10,000
  </h5>
</div>

<div class="bar"></div>
 
<div class="d-flex justify-content-between mainwhiteback p-2 atm">
  <p class="m-0"><i class="fas fa-car"></i> sedan</p>
  <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
</div>
  `,
  `<div class="img-container">
  <img src="img/car-american-1.jpeg" class="img-fluid" alt="">
</div>

<div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">

  <div class="tin">
    <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
    <h6 class="text-uppercase">MODEL</h6>
  </div>
  
  <h5 class="invpoly p-2 maintrablueback mainwhite">
    $10,000
  </h5>
</div>

<div class="bar"></div>
 
<div class="d-flex justify-content-between mainwhiteback p-2 atm">
  <p class="m-0"><i class="fas fa-car"></i> sedan</p>
  <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
</div>
  `,
  `<div class="img-container">
  <img src="img/car-american-2.jpeg" class="img-fluid" alt="">
</div>

<div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">

  <div class="tin">
    <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
    <h6 class="text-uppercase">MODEL</h6>
  </div>
  
  <h5 class="invpoly p-2 maintrablueback mainwhite">
    $10,000
  </h5>
</div>

<div class="bar"></div>
 
<div class="d-flex justify-content-between mainwhiteback p-2 atm">
  <p class="m-0"><i class="fas fa-car"></i> sedan</p>
  <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
</div>
  `,
  `<div class="img-container">
  <img src="img/car-american-3.jpeg" class="img-fluid" alt="">
</div>

<div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">

  <div class="tin">
    <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
    <h6 class="text-uppercase">MODEL</h6>
  </div>
  
  <h5 class="invpoly p-2 maintrablueback mainwhite">
    $10,000
  </h5>
</div>

<div class="bar"></div>
 
<div class="d-flex justify-content-between mainwhiteback p-2 atm">
  <p class="m-0"><i class="fas fa-car"></i> sedan</p>
  <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
</div>
  `,
  `<div class="img-container">
  <img src="img/car-american-4.jpeg" class="img-fluid" alt="">
</div>

<div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">

  <div class="tin">
    <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
    <h6 class="text-uppercase">MODEL</h6>
  </div>
  
  <h5 class="invpoly p-2 maintrablueback mainwhite">
    $10,000
  </h5>
</div>

<div class="bar"></div>
 
<div class="d-flex justify-content-between mainwhiteback p-2 atm">
  <p class="m-0"><i class="fas fa-car"></i> sedan</p>
  <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
</div>
  `
  ],
  american:[
    `<div class="img-container">
    <img src="img/car-american-1.jpeg" class="img-fluid" alt="">
  </div>
  
  <div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">
  
    <div class="tin">
      <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
      <h6 class="text-uppercase">MODEL</h6>
    </div>
    
    <h5 class="invpoly p-2 maintrablueback mainwhite">
      $10,000
    </h5>
  </div>
  
  <div class="bar"></div>
   
  <div class="d-flex justify-content-between mainwhiteback p-2 atm">
    <p class="m-0"><i class="fas fa-car"></i> sedan</p>
    <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
  </div>
    `,
    `<div class="img-container">
    <img src="img/car-american-2.jpeg" class="img-fluid" alt="">
  </div>
  
  <div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">
  
    <div class="tin">
      <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
      <h6 class="text-uppercase">MODEL</h6>
    </div>
    
    <h5 class="invpoly p-2 maintrablueback mainwhite">
      $10,000
    </h5>
  </div>
  
  <div class="bar"></div>
   
  <div class="d-flex justify-content-between mainwhiteback p-2 atm">
    <p class="m-0"><i class="fas fa-car"></i> sedan</p>
    <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
  </div>
    `,
    `<div class="img-container">
    <img src="img/car-american-3.jpeg" class="img-fluid" alt="">
  </div>
  
  <div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">
  
    <div class="tin">
      <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
      <h6 class="text-uppercase">MODEL</h6>
    </div>
    
    <h5 class="invpoly p-2 maintrablueback mainwhite">
      $10,000
    </h5>
  </div>
  
  <div class="bar"></div>
   
  <div class="d-flex justify-content-between mainwhiteback p-2 atm">
    <p class="m-0"><i class="fas fa-car"></i> sedan</p>
    <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
  </div>
    `,
    `<div class="img-container">
    <img src="img/car-american-4.jpeg" class="img-fluid" alt="">
  </div>
  
  <div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">
  
    <div class="tin">
      <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
      <h6 class="text-uppercase">MODEL</h6>
    </div>
    
    <h5 class="invpoly p-2 maintrablueback mainwhite">
      $10,000
    </h5>
  </div>
  
  <div class="bar"></div>
   
  <div class="d-flex justify-content-between mainwhiteback p-2 atm">
    <p class="m-0"><i class="fas fa-car"></i> sedan</p>
    <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
  </div>
    `
  ],
  german:[
    `<div class="img-container">
    <img src="img/car-german-1.jpeg" class="img-fluid" alt="">
  </div>
  
  <div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">
  
    <div class="tin">
      <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
      <h6 class="text-uppercase">MODEL</h6>
    </div>
    
    <h5 class="invpoly p-2 maintrablueback mainwhite">
      $10,000
    </h5>
  </div>
  
  <div class="bar"></div>
   
  <div class="d-flex justify-content-between mainwhiteback p-2 atm">
    <p class="m-0"><i class="fas fa-car"></i> sedan</p>
    <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
  </div>
    `,
    `<div class="img-container">
    <img src="img/car-german-2.jpeg" class="img-fluid" alt="">
  </div>
  
  <div class="item-info d-flex justify-content-between mainwhiteback px-2 py-3">
  
    <div class="tin">
      <h6 class="font-weight-bold text-uppercas">CAR MAKER</h6>
      <h6 class="text-uppercase">MODEL</h6>
    </div>
    
    <h5 class="invpoly p-2 maintrablueback mainwhite">
      $10,000
    </h5>
  </div>
  
  <div class="bar"></div>
   
  <div class="d-flex justify-content-between mainwhiteback p-2 atm">
    <p class="m-0"><i class="fas fa-car"></i> sedan</p>
    <p class="m-0 text-capitalize"><i class="fa fa-cog" aria-hidden="true"></i> automatic</p>
  </div>
    `
  ]
}
$(function () {
    'use strict';
    var winH   = $(window).height(),
        navH   = $('.navbar').innerHeight();
    $('.head').innerHeight(winH-navH);
  });

  $(window).scroll(function(){
    
    if($(window).scrollTop() > 600){
        $('#Top').css('display','flex')
        $('.navbar').addClass('navMove')
    }else{
        $('.navbar').removeClass('navMove')
        $('#Top').css('display','none')
    }
})

$('#Top').click(function(){
    $('html,body').animate({scrollTop:0},2000)
})

$(".nav-link").click(function(){
    let targetElementId=$(this).attr("href")
    let targetElementDistanceToTop=$(targetElementId).offset().top
    $('html,body').animate({ scrollTop:targetElementDistanceToTop },1000)
})


function display(arr){

$('#inventory .row').html('')

arr.forEach(ele=>{
    $('#inventory .row').append(`<div class=" col-lg-4 col-md-6 mb-2 hide" >${ele}</div>`)
    
})
 $('#inventory .row > div').fadeIn(2000)

}

$('#all').click(function(event){
    event.preventDefault();
    display(elements.all)
})

$('#american').click(function(event){
    event.preventDefault();
    display(elements.american)
})

$('#german').click(function(event){
    event.preventDefault();
    display(elements.german)
})


