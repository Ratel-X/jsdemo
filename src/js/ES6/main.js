//女装货源轮播!!!
(function(){
// 获取大ul
let index = 0;
let timer = null;
let num = $('.nvZhuang .right .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.nvZhuang .right .lunBo ul').animate({left:0},0)
   }
   $('.nvZhuang .right .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.nvZhuang .right .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.nvZhuang .right .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.nvZhuang .right .top li').click(function () { 

   let index = $(this).index();
   $('.nvZhuang .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.nvZhuang .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.nvZhuang .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.nvZhuang .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//箱包货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.xiangBao .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.xiangBao .lunBo ul').animate({left:0},0)
   }
   $('.xiangBao .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.xiangBao .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.xiangBao .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.xiangBao .right .top li').click(function () { 

   let index = $(this).index();
   $('.xiangBao .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.xiangBao .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.xiangBao .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.xiangBao .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//美妆货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.meiZhuang .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.meiZhuang .lunBo ul').animate({left:0},0)
   }
   $('.meiZhuang .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.meiZhuang .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.meiZhuang .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.meiZhuang .right .top li').click(function () { 

   let index = $(this).index();
   $('.meiZhuang .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.meiZhuang .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.meiZhuang .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.meiZhuang .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//童装母婴货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.tongZhuang .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.tongZhuang .lunBo ul').animate({left:0},0)
   }
   $('.tongZhuang .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.tongZhuang .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.tongZhuang .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.tongZhuang .right .top li').click(function () { 

   let index = $(this).index();
   $('.tongZhuang .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.tongZhuang .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.tongZhuang .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.tongZhuang .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//男装货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.nanZhuang .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.nanZhuang .lunBo ul').animate({left:0},0)
   }
   $('.nanZhuang .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.nanZhuang .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.nanZhuang .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.nanZhuang .right .top li').click(function () { 

   let index = $(this).index();
   $('.nanZhuang .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.nanZhuang .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.nanZhuang .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.nanZhuang .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//内衣货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.neiYi .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.neiYi .lunBo ul').animate({left:0},0)
   }
   $('.neiYi .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.neiYi .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.neiYi .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.neiYi .right .top li').click(function () { 

   let index = $(this).index();
   $('.neiYi .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.neiYi .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.neiYi .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.neiYi .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//家居货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.jiaJu .lunBo li').length;

// console.log(num)

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.jiaJu .lunBo ul').animate({left:0},0)
   }
   $('.jiaJu .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.jiaJu .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.jiaJu .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.jiaJu .right .top li').click(function () { 

   let index = $(this).index();
   $('.jiaJu .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.jiaJu .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.jiaJu .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.jiaJu .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//家电货源轮播!!!!!
(function(){
let index = 0;
let timer = null;
let num = $('.jiaDian .lunBo li').length;

function next(){
   index++;
   if(index>num-1){
      index = 0;
      $('.jiaDian .lunBo ul').animate({left:0},0)
   }
   $('.jiaDian .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function prev(){
   index--;
   if(index<0){
      index = num-1;
      $('.jiaDian .lunBo ul').animate({left:-(index)*237},0)
   }
   $('.jiaDian .lunBo ul').animate({left:-(index)*237},500)
   small_img(index);

}

function auto(){
   timer = setInterval(()=>{
      next();
      // prev()
   },1500)
}
auto();

$('.jiaDian .right .top li').click(function () { 

   let index = $(this).index();
   $('.jiaDian .lunBo ul').animate({left:-(index)*237},500);
   small_img(index);
})

$('.jiaDian .lunBo ul').mouseenter(function () { 
   clearInterval(timer);
})
// 鼠标移出，定时器开启
$('.jiaDian .lunBo ul').mouseleave(function () { 
   auto();
})

function small_img(index) { 
   $('.jiaDian .right .top li').eq(index).addClass('active').siblings().removeClass('active');
}
})();
//多商秒杀轮播！！！！
(function(){
   let index = 0;
   let timer = null;
   let num = $('.miaoSha li').length;
   $('.Btn_pres_left').click(function () { 
      clearInterval(timer);
      prev();
   })
   $('.Btn_pres_right').click(function () { 
      clearInterval(timer);
      next();
   })   

   function next(){
      index ++;
      if(index > num - 4){
         index = 0;
         $('.miaoSha ul').animate({left:0},0)
      }
      $('.miaoSha ul').animate({left:-(index)*406},500)
   
   }
   function prev(){
      index --;
      if(index < 0){
         index = num - 3;
         $('.miaoSha ul').animate({left:-(index - 2)*406},0)
      }
      $('.miaoSha ul').animate({left:-(index)*406},500)  
   }
   
   function auto(){
      timer = setInterval(()=>{
         next();
      },1500)
   }
   auto();

   $('.miaoSha ul').mouseenter(function () { 
      clearInterval(timer);
   })
   // 鼠标移出，定时器开启
   $('.miaoSha ul').mouseleave(function () { 
      auto();
   })
})();

