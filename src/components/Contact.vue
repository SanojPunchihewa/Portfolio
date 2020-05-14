<template>
  <div id="contact">
    <section class="section">
    <div style="width:100%;">
      <div class="has-text-centered">
        <span style="margin-bottom:30px" class="underline heading is-size-2 w300">Contact</span>
        <span>Drop me an email at <a href="mailto:sanoj.punchihewa@gmail.com">sanoj.punchihewa@gamil.com</a></span>
      </div>
    </div>   
  </section>
  <footer class="footer" style="padding:8px 0px 40px 0px; background: #292929;"> 
    <div class="content has-text-centered">
      <div class="social-icons has-text-centered">
        <a href="mailto:sanoj.punchihewa@gmail.com"><b-icon icon="envelope"/></a>
        <a target="_blank" href="https://github.com/SanojPunchihewa"><b-icon icon="github" pack="fab"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/sanojpunchihewa/"><b-icon icon="linkedin" pack="fab"/></a>
        <a target="_blank" href="https://www.facebook.com/sanoj.punchihewa.1"><b-icon icon="facebook" pack="fab"/></a>
      </div>   
      <p style="color:#BBBBBB; margin-top:20px">
        <b-icon size="is-small" pack="far" icon="copyright"/> 2020 <strong style="color:#BBBBBB">Sanoj Punchihewa</strong>
      </p>
    </div>
  </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }
}
</script>


<style scoped>

.social-icons{   
  margin-top: 50px;
}
.social-icons a{
  display: inline-block;
	width: 32px;
	height: 32px;
	font-size: 1em;
  line-height: 1.9em;
	color: #BBBBBB;
  background: transparent;
  border-radius: 50%;
	text-align: center;
  margin-left: 3px;
  margin-right: 3px;
}

.social-icons a:hover {
  color: #04C8E1;
  transition: 0.7s ease;
}

</style>
