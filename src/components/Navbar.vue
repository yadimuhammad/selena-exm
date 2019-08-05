<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FFFFFF;">
       <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" height="50" class="d-inline-block align-top" alt="" style="padding-right: 50px;">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <form class="form-inline">
              <input id="searchNav" class="form-control mr-sm-2" type="search" placeholder="Cari aktivitas" aria-label="Search">
            </form>  
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Bantuan</a>
                      </li>
                      <li>
                        <button class="btn tn btn-warning" type="button" style="padding-left: 20px; padding-right: 20px; font-weight: 500;">Sign In</button>
                      </li>
                    </ul>
            </div>
        </div>
    </nav>
    </div>


</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item {
    padding-left: 20px;
    padding-right: 20px;
}

#searchNav {
    background-color: #FAFAFA;
    border-width: 0;
    color: #D3D3D3;
    font-size: 1.2vw;
}
</style>
