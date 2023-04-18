<script>
import AccountService from "@/services/account.service";

export default{
    data(){
        return {
            data: {}
        }
    }, 
    methods:{
        async signup(){
            try {
                if(this.data.MatKhau==this.data.ConfirmMatKhau){
                    const res = await AccountService.signup(this.data);
                    this.$router.push('/');
                }else{
                    alert("Mật khẩu và xác nhận mật khẩu không trùng nhau");
                }
                
            } catch (error) {
                alert("Đăng ký không thành công");
            }

        }
    }
}
</script>

<template>
    <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
    <div class="container-fluid">
        <a class="navbar-brand " href="home.html">
            <label class="logo">QUẢN LÝ CÔNG VĂN ĐẾN TRƯỜNG CNTT&TT</label>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ctr-align">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="product.html"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
            </ul>
            <div class="d-lg-flex ">
                <form class="search-div">
                    <div class="search_bar">
                        <i class="fa fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm..." />
                    </div>
                </form>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex ctr-align">
                    <li>
                        <router-link to="/login" class="nav-link">
                                    <button type="button" class="btn login-btn">
                                        <a href="">LOGIN</a>
                                    </button>
                        </router-link>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
    
<div class="dang_ky">
    <h1>ĐĂNG KÝ</h1><br>
    <form class="form" @submit.prevent="this.signup()">
        Tên đăng nhập
        <input type="text" v-model="this.data.TenDangNhap" maxlength="50" id="ten" required><br><br>
        Mật khẩu
        <br>
        <input type="password" v-model="this.data.MatKhau" id="psw" required><br><br>
        Xác nhận mật khẩu
        <br>
        <input type="password"  v-model="this.data.ConfirmMatKhau" id="psw" required><br><br>
        <input type="submit" value="Đăng ký"><br>
        <br><br>
    </form>
  </div>
  
</body>
</template>

<style scoped>
    :root {
  --primary: #f3d9ca;
  --secondary: #faf5f3;
  --hover: #ccccff;
  --typo: #433336;
  --shade: 0 3px 10px rgb(0 0 0 / 0.2);
}
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
body{
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}
a {
  text-decoration: none;
  list-style: none;
  color: black;
}

  label.logo {
    margin-left: 30px;
    font-size: 28px;
    line-height: var(--h-nav);
  }
  /* Banner */
.h-banner{
    width:800px;
    height: 570px;
}
div.carousel-inner h5 {
    font-family: 'Mea Culpa', cursive;
    font-size: 50px;
}
  /*thanh tim kiem*/
  .search-div{
      margin: 0px 20px;
  }
  .search_bar {
    padding: 0px 10px;
    width: 350px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    height: 45px;
    border: 2px solid black;
  }
  .search_bar:focus {
    background-color: var(--secondary);
  }
  .search_bar > i {
    min-width: 40px;
    text-align: center;
  }
  .search_bar > input {
    flex: 1;
    height: inherit;
    border: none;
    outline: none;
    background-color: inherit;
    font-size: 16px;
  }

  .ctr-align{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  /*button login*/
  /* Code them y */
  button, .login-btn,.logout-btn {
    padding: 9px 25px;
    border: 2px solid;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    background-color: inherit;
  }
  
  button.btn.login-btn:hover{
    background-color: var(--primary);
  }
  button.btn.logout-btn:hover{
    background-color: var(--primary);
  }

  a.nav-link > i{
    padding:0px 10px 0px 10px;
  }
  a.nav-link > i:hover{
      color: var(--primary);
  }
  /* Code them y */
  
  @media (max-width: 1090px) {
    label.logo {
      font-size: 28px;
    }
    .search-div {
      display: flex;
      justify-content: center;
    }
    nav ul li a:i {
      min-width: fit-content;
    }
    nav ul li a:active {
      color: var(--typo);
    }
  }

  @media (max-width: 991.98px) {
    .ctr-align:nth-child(2){
        margin-top: 15px;
    }
    .h-banner{
        height: 400px;
    }
    .grid-container-3 p{
      width: 80%;
      font-size: 16px;
  }
  .grid-container-3 .text-item{
    margin: 20px 0px;
  }
}

  /*PHẦN FORM ĐĂNG KÝ*/
.dang_ky{
    margin: 5% 35%;
    width: 35%;
    height: 70%;
    border: 5px solid #110d40;
    padding: 5%;
}
.form{
  padding: 5% 2% 5%;
}
.dang_ky h1{
    font-size: 25px;
    text-align: center;
}
.dang_ky .quenmk{
  font-size: 16px;
  margin-left: 15%;
  color: #1d6dd6;
}

.dang_ky p{
    font-size:14px;
    text-align: center
}
.dang_ky input[type=submit]{
    font-size: 18px;
    border-radius: 12px;
    padding: 3% 12%;
    background:#110d40;
    color: white;
    border: white;
    margin: 8% 0% 8% 25%;
    cursor: pointer;
}
.dang_ky .dki, .dang_ky .cctk{
  font-size: 16px;
}
.dang_ky .cctk{
  margin-left: 10%;
}
.dang_ky .dki{
  color: #1d6dd6;
  cursor: pointer;
}
.quenmk:hover, .dki:hover{
  color: #83a8d8;
}

.dang_ky input[type=submit]:hover,
.dang_ky input[type=submit]:active{
  background-color: #110d40;
}
.dang_ky input[type=text], input[type=password]{
    border-radius: 12px;
    height: 8.5%;
    width: 100%;
    border: white;
    background-color:#E0E0E0;
    padding: 2%;
}
.dang_ky input[type=text], input[type=password]:focus{
  outline: none;
}
.dang_ky img{
    display: inline-block;
    width: 40px;
    height: 35px; 
    padding-right: 3%;
    
}

.dang_ky .hinh{
  padding-left: 30%;
}



/*RESPONSIVE*/
@media only screen and (max-width:1024px){

  /*Form*/
  .dang_nhap{
    margin: 1% 30%;
    width: 43%;
}
  


}

@media only screen and (max-width:768px){

   /*Form*/
   .dang_nhap{
    margin: 1% 25%;
    width: 55%;
}
}

@media only screen and (max-width:425px){

  .dang_nhap{
    margin: 2% 8%;
    width: 87%;
    height: 90%;
}

.dang_nhap h1{
    font-size: 20px;
}

.dang_nhap .quenmk, p{
  font-size: 15px;
}

.dang_nhap input[type=submit]{
    font-size: 16px;
}
.dang_nhap .dki, .dang_nhap .cctk{
  font-size: 15px;
}


.dang_nhap img{
    width: 40px;
    height: 30px; 
}

.dang_nhap .hinh{
  padding-left: 30%;
}


}
</style>