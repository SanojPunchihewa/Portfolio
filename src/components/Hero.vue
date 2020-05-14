<template>
  <div id="hero">
    <nav class="navbar is-fixed-top is-transparent" style="box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2);">
    <div class="navbar-brand">
        <a class="navbar-item" v-smooth-scroll="{duration: 1000}" href="#hero">
        Sanoj Punchihewa
        </a>
        <div class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
        <div class="navbar-item">
            <a class="navbar-item underline" v-smooth-scroll="{duration: 1000}" href="#about">About</a>
            <a class="navbar-item underline" v-smooth-scroll="{duration: 1000}" href="#skills">Skills</a>
            <a class="navbar-item underline" v-smooth-scroll="{duration: 1000}" href="#competitions">Competitions</a>
            <a class="navbar-item underline" v-smooth-scroll="{duration: 1000}" href="#projects">Projects</a>
            <a class="navbar-item underline" v-smooth-scroll="{duration: 1000}" href="#contact">Contact</a>
        </div>
        </div>
    </div>
    </nav>
    <section class="hero has-bg-img is-medium">
    <div class="overlay hero-body">
        <div class="container">
            <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
            <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <figure style="width:190px" class="round image">
                <img style="border-radius: 50%" src="../assets/pro-pic.jpg">
                </figure>
                </div>
            </div>
            <div class="level-item">
                <div>
                <h1 class="w300 is-size-3">
                    Sanoj Punchihewa
                </h1>
                <h1 class="w300 is-size-5">
                    Undergraduate,<br>
                    Faculty of Engineering,<br>
                    University of Peradeniya, Sri Lanka
                </h1>
                </div>
            </div>
            </nav> 
            </div>
            </div>
        </div>
    </div>
    </section>  
    <nav class="level padding-lr">    
    <div class="level-left">
        <div class="level-item">
            <p>Last modified on May 14, 2020</p>
        </div>
    </div>
    <div class="level-right">
        <div class="level-item">
            <a target="_blank" href="https://github.com/SanojPunchihewa/SanojPunchihewa.github.io/blob/master/static/ResumeSanojPunchihewa.pdf?raw=true" class="button download-button">Download Resume</a>
        </div>
    </div>
    </nav> 
  </div>
</template>

<script>
export default {
    methods: {
       
    }
}
</script>


<style scoped>

.padding-lr {
    padding: 10px 30px 10px 30px;
    background: #F3F3F3;
}

.has-bg-img {
    background: url("../assets/background-hero.jpg")center center;
    background-size:cover;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.699);
}

h1 {
    color: white;
}

.underline {
  display: inline;
  position: relative;
  overflow: hidden;
}
.underline:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: 0;
  left: 150px;
  width: 0;
  bottom: -5px;
  height: 7px;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.underline:hover:after,
.underline:focus:after,
.underline:active:after {
  left: 0px;
  right: auto;
  width: 100%;
}

#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .nav-menu {
  display: block;
}

.download-button{
    font-size: 1em;
    line-height: 0.8em;
    background: #04C8E1;
    width: 180px;
    border-radius: 2px;
    color: white;
}

.download-button:hover{
    background: #03A9BE;
    transition: 0.5s ease;    
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    color: white;
}

</style>
