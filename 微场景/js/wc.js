// 原生js开始
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
    });
//原生js结束

//音乐图标开始
	var music = document.getElementById("music");
	var music_off = music.getElementsByClassName("music_off")[0];
	var music_gif =music.getElementsByClassName("music_gif")[0];
	var bgmusic = music.getElementsByClassName("bgmusic")[0];
	var sum = 1;
	music.onclick = function(){
//		关闭音乐
		if (sum==1) {
			music_gif.style.display = "none";
			music_off.style.animation = "none";
			bgmusic.pause();
			sum = 2;
		}else if(sum == 2)
		{
			music_gif.style.display = "block";
			music_off.style.animation = "xz 4s linear infinite";
			bgmusic.play();
			sum = 1;
		}
	}


//音乐图标结束