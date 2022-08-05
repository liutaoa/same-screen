<template>
  <div>
  	<div class="swiper-container-wrapper">
  	  <!-- Slider main container -->
  	  <div class="swiper-container gallery-top">
  		<!-- Additional required wrapper -->
  		<div class="swiper-wrapper">
  		  <!-- Slides -->
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
  		  </div>
  		  <div class="swiper-slide">
  			<img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
  		  </div>
  		</div>
  		<!-- Add Arrows -->
  		<div class="swiper-button-next"></div>
  		<div class="swiper-button-prev"></div>
  	  </div>
  	  <!-- Slider thumbnail container -->
  	  <div class="swiper-container gallery-thumbs">
  		  <div class="swiper-wrapper">
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"/>
          </div>
          <div class="swiper-slide">
  		  	  <img src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"/>
          </div>
  		  </div>
  	  </div>
  	</div>
    <div class="tips">
      <el-input type="textarea">备注</el-input>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper'  //轮播图插件
    import 'swiper/css/swiper.css'
    export default {
        name: "HomeSwiper",
        data() {
            return {
                slides: [{id: 1, img_url: 'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'},
                    {id: 2, img_url: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'}]
            }
        },
        mounted() {//html加载完成之后初始化Swiper
          var galleryThumbs = new Swiper(".gallery-thumbs", {
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
	        keyboard: {
	            enabled: true,
	            pageUpDown: true,
	        },
	        freeMode: true,
	        mousewheel: true,
            breakpoints: {
              480: {
                direction: "vertical",
                slidesPerView: 4,
              }
            }
          });
          var galleryTop = new Swiper(".gallery-top", {
            direction: "horizontal",
	        keyboard: {
	            enabled: true,
	            pageUpDown: true,
	        },
	        mousewheel: true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            thumbs: {
              swiper: galleryThumbs
            }
          });
        }
    }
</script>

<style scoped>
body {
  position: relative;
  height: 100%;
}

body {
  background: #000;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 480px) {
  .swiper-container {
    min-height: 320px;
  }
}
.swiper-container-wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100vw;
}
@media (min-width: 480px) {
  .swiper-container-wrapper {
    flex-flow: row nowrap;
  }
}

.swiper-button-next, .swiper-button-prev {
  color: #fff;
}

.swiper-slide-duplicate,
.swiper-slide {
  text-align: center;
  background-size: cover;
  background-position: center;
  background-color: #fff;
  /* Center slide text vertically */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* Slide content */
}

.bg1{
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
}
.bg2{
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
}
.bg3{
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
}


.swiper-slide-duplicate .description,
.swiper-slide-duplicate .title,
.swiper-slide .description,
.swiper-slide .title {
  display: block;
  opacity: 0;
  transition: 0.5s ease 0.5s;
}
.swiper-slide-duplicate-active .description,
.swiper-slide-duplicate-active .title,
.swiper-slide-active .description,
.swiper-slide-active .title {
  opacity: 1;
}
.swiper-slide-duplicate-active .title,
.swiper-slide-active .title {
  margin-bottom: 0.5rem;
  font-size: 24px;
  color: #fff;
  transition: opacity 0.5s ease 0.5s;
}
.swiper-slide-duplicate-active .description,
.swiper-slide-active .description {
  font-size: 16px;
  color: #fff;
  transition: opacity 0.5s ease 0.75s;
}

.gallery-top {
  width: 100%;
  height: 75vh;
}
@media (min-width: 480px) {
  .gallery-top {
    width: 80%;
    height: 100%;
    margin-right: 10px;
  }
}

.gallery-thumbs {
  width: 100%;
  height: 25vh;
  padding-top: 10px;
}
@media (min-width: 480px) {
  .gallery-thumbs {
    width: 20%;
    height: 100%;
    padding: 0;
  }
}
.gallery-thumbs .swiper-wrapper {
  flex-direction: row;
}
@media (min-width: 480px) {
  .gallery-thumbs .swiper-wrapper {
    flex-direction: column;
  }
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  flex-flow: row nowrap;
  height: 100%;
  opacity: 0.75;
  cursor: pointer;
  overflow:hidden;
}
@media (min-width: 480px) {
  .gallery-thumbs .swiper-slide {
    flex-flow: column nowrap;
    width: 100%;
  }
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
body > div{
	height: calc(100vh - 250px);
}
.swiper-container-wrapper{
  height: calc(100vh - 150px);
  overflow: hidden;
}
.gallery-thumbs .swiper-wrapper{
  height: calc(100vh - 150px);
}
.tips{
  height: 150px;
}
</style>
