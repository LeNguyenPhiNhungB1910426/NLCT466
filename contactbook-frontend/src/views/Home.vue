<script>
import ContactService from "@/services/contact.service";

export default{
    data(){
        return{
            allCongVan: [],
        }
    },
    methods:{
        async getAll(){
            this.allCongVan = await ContactService.getAll();
            this.allCongVan.reverse();
        },
        async getFile(file,SoCongVan){
          const res = await ContactService.getFile({url: file, SoCongVan: SoCongVan});
          var URL = window.URL.createObjectURL(new Blob([res]));
          var link = document.createElement('a');
          link.href = URL;
          link.setAttribute('download', file);
          document.body.appendChild(link);
          link.click();
        }
    },
    mounted(){
        this.getAll();
    }
}
</script>

<template>
    <body>
    <nav class="navbar navbar-expand-lg p-3">
        <div class="container-fluid">
            <a class="navbar-brand " href="">
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
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="">
                
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">
                               
                            </a>
                        </li>
                        <li>
                            <router-link to="/">
                                <button class="btn logout-btn" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                title="Đăng Xuất">
                                <i class="fas fa-sign-out-alt"></i>
                            </button>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="banner" style="width:90vw ;margin: 0 auto;">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            
            <div class="carousel-inner">
                <div class="carousel-item active" style="color: #110d40;">
                    <img src="@/assets/img/banner.png"  class="d-block w-100 h-banner" alt="banner" height=200px width=200px>
                    <div class="carousel-caption d-none d-md-block">
                      <!-- <img src="@/assets/img/banner2.png"  class="d-block w-100 h-banner" alt="banner" height=100px width=-2px> -->
                      <h5 style="color: ghostwhite;">Chào mừng đến với hệ thống quản lý công văn đến</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  
 <div class="" style="width:90vw ;margin: 0 auto;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
        <!-- <div class="container">
          <a class="navbar-brand" href="#">Trang chủ</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Giới thiệu
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Giới thiệu Phòng CTSV </a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Chức năng nhiệm vụ</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Liên hệ công tác</a></li>
                    </ul>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nội quy-Quy chế
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Nội quy</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Quy chế học vụ</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Văn bản</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Thông báo
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Thông báo Phòng CTSV</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Chế độ chính sách</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Học bổng</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Tin hoạt động</a></li>
                </ul>
              </li>
            
            </ul>
          </div>
        </div> -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ctr-align p-3">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="">Trang chủ</a>
                      </li>
                    <router-link to="/gioithieu">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="">Giới thiệu</a>
                      </li>
                    </router-link>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="">Nội quy-Quy chế</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="">Thông báo</a>
                    </li>
                </ul>
      </nav>

 </div>
 

    <section style="
      /* padding: 50px 0px; */ margin: auto; height: 100%;
    ">
        <div class="grid-container-2">
            <div  class="item1 border border-primary">
                <h4 class="m-0 ">Hỗ trợ sinh viên Online</h4><br>
                <hr>
                <br>
                <p> Đăng ký tư vấn tâm lý, sức khỏe cho HSSV</p>
                <p> Video hỗ trợ HS/SV học online</p>
                <p> Đóng góp ý kiến về chất lượng hỗ trợ phục vụ</p>
                <p> Đăng ký nộp bản sao thẻ BHYT do địa phương cấp (không mua BHYT tại Trường)</p>
                <p> Đăng ký điều chỉnh thông tin sinh viên Online</p>
                <p> Đăng ký Giấy tạm hoãn nghĩa vụ quân sự</p>
                <p> Đăng ký Giấy xác nhận vay vốn tại địa phương (Theo Cá nhân)</p>
                <p> Tiếp nhận thông tin góp ý, phản ánh</p>
              </div>
            <div class="item2 border border-primary">
                <h4 class="m-0">Tin mới nhất</h4><br>
                <hr>
                <br>
                <p v-for="e in this.allCongVan" @click="getFile(e.File,e.SoCongVan)" style="text-decoration:underline">{{e.File}}</p>
                <p>Thông báo học bổng Cathay Life Insurance 2022</p>
                <p>Thông báo phát thẻ Bảo hiểm y tế và Bảo hiểm tai nạn cho sinh viên khóa 48</p>
                <p>Thông báo học bổng "Lương Định Của" năm học 2022 - 2023</p>
                <p>Quyết định hỗ trợ chi phí học tập học đợt ngày 07/11/2022</p>
                <p>Quyết định trợ cấp xã hội cho sinh viên đợt 15/11/2022</p>
                
            </div>
            <div class="item3 border border-primary">
                <h4>Tin học bổng tài trợ</h4><br>
                <hr>
                <br>
                <p>Thông báo học bổng "Lương Định Của" năm học 2022 - 2023</p>
                <p>Thông báo học bổng Cathay Life Insurance 2022</p>
                <p>Thông báo học bổng Nguyễn Trường Tộ (VNHELP) năm học 2022 - 2023</p>
                <p>Kết quả học bổng AIG năm học 2022 - 2023</p>
                <p>Chương trình tặng thưởng Khuyến học - Khuyến Tài họ Dương năm học 2022 - 2023</p>
                
            </div>
            <div class="item4 border border-primary">
                <h4>Thực hiện nghị định 116</h4><br>
                <hr>
                <br>
                <p>Công văn trả lời nghị định 116 của các tỉnh</p>
                <p>Quyết định sinh viên khối ngành Sư phạm khóa 47 hưởng chính sách Nghị định 116</p>
                <p>Danh sách sinh viên ngành sư phạm khóa 47 tự túc kinh phí và chi phí sinh hoạt</p>
                <p>Công văn 340/CTSV, ngày 03/11/2021 về việc rà soát sinh viên khối ngành đào tạo giáo viên, khóa 47 tự túc về học phí và chi phí sinh hoạt</p>
                <p>Quyết định 3227/QĐ-BGDĐT, ngày 29/10/2020 về việc công bố thủ tục hành chính mới ban hành, lĩnh vực giáo dục và đào tạo thuộc phạm vi chức năng quản lý của Bộ Giáo dục và Đào tạo</p>
                
                
            </div>
        </div>
    </section>
</body>
<footer>
    <div class="footer_page">
        <div class="tieu_de row">
            <div class="td1 col span-1-of-5"><a>DỊCH VỤ TIỆN ÍCH</a></div>
            <div class="td2 col span-1-of-5"><a>THÔNG TIN</a></div>
            <div class="td3 col span-1-of-5"><a>LIÊN HỆ</a></div>
            <div class="td4 col span-1-of-5"><a href="">ĐẠI HỌC CẦN THƠ</a></div>
        </div>
        <hr />
        <div class="nd row">
            <div class="nd1 col span-1-of-5">
                <a>Thư điện tử</a>
                <a>Học trực tuyến</a>
                <a>Văn bản</a>
                <a>Trợ giúp</a>
            </div>
            <div class="nd2 col span-1-of-5">
                <a class="tc">Sự kiện</a>
                <a class="story">Lịch trường</a>
                <a class="mgh">CTU 55 năm</a>
            </div>
            <div class="nd3 col span-1-of-5">
                <a class="sdt"><i class="fas fa-phone-volume"></i> +84292 3832 663</a>

                <a class="gmail"><i class="far fa-envelope"></i>dhct@ctu.edu.vn</a>

                <a class="dia_chi"><i class="fas fa-map-marker-alt"></i> Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, Tp. Cần Thơ</a>
            </div>
            <div class="slogan_icon col span-1-of-5">
                <!-- <div>
                    <a>Khơi nguồn sáng tạo thỏa sức mua hàng cùng CHODOCU</a>
                    <a></a>
                </div> -->
                <a class="icons">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram-square"></i>
                </a>
            </div>
        </div>
    </div>
</footer>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');
/* :root {
    --primary: #f3d9ca;
    --secondary: #faf5f3;
    --hover: #ccccff;
    --typo: #433336;
    --shade: 0 3px 10px rgb(0 0 0 / 0.2);
    --h-nav: 60px;
  } */
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    color: black;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  body {
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
  li a {
    text-decoration: none;
    list-style: none;
  }  
  label.logo {
    margin-left: 30px;
    font-size: 28px;
    line-height: 60px !important;
  }
  /* Banner */
.h-banner{
    width:800px;
    
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


  /*grid view*/
  .grid-container {
    margin: 0px 60px;
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-template-rows: 250px;
    justify-content: center;
  }
  .item-1 {
    border-radius: 20px;
    margin: 20px;
    grid-column: 1/5;
    background-image: url(./img/slide1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    width: 90vw;
  }
  .item-2 {
    border-radius: 20px;
    margin: 30px 10px;
    padding: 10px;
    grid-column: 5/6;
    background-image: url(/image/extrabanner.jpg);
    background-size: cover;
    text-align: center;
    align-items: center;
    display: flex;
    color: white;
    font-size: 20px;
    font-style: italic;
    font-weight: lighter;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .cir {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-size: cover;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  h3 {
    margin: auto;
    font-weight: normal;
  }
  
  @media (max-width: 1300px) {
    .grid-container {
      margin:0px auto;
      width: 90vw;
      grid-template-columns:50% 50%;
      grid-template-rows:120px 120px 120px;
    }
    .grid-item{
      margin: 10px;
    }
    .cir{
      background-position: left;
      width:100%;
      height:100%;
      border-radius: 12px;
      box-shadow: 0 1px 1px rgb(0 0 0 / 0.2);
    }
    .cir:hover{
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
    .grid-item h3{
      position: absolute; 
      line-height: 100px;
      color:var(--secondary);
      font-size: 20px;
      font-weight: bold;
    }
  }
  /*Thuộc tính*/
  .grid-container-2 {
    margin: 0px 60px;
    display: grid;
    grid-template-columns: 45vw 45vw;
    justify-content: center;
  }
  .grid-container-2 h4{
      font-weight: bold; 
      font-size: 25px;
  }

  .item1 {
    background-size: cover;
    margin: 0px 0px 15px 15px;
   
  }
  .item2 {
   
    background-size: cover;
    margin: 0px 0px 15px 15px;
  }
  .item3 {
   
    background-size: cover;
    margin: 0px 0px 15px 15px;
  }
  .item4 {
   
    background-size: cover;
    margin: 0px 0px 15px 15px;
  }
  .grid-container-2 > div {
    padding: 30px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
  /*inside grid item1 item2...*/
  .grid-container-2 h4 {
    font-size: 25px;
    color: black;
  }
  .grid-container-2 p {
    font-size: 17px;
    color: black;
    font-weight: lighter;
  }
  
  .grid-container-2 a {
    background-color: transparent;
    width: 150px;
    border: none;
    color: white;
    padding: 11px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 50px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    align-items: flex-end;
  }
  .grid-container-2 a:hover,
  :visited {
    background-color: var(--primary);
    color: var(--typo);
  }
  @media (max-width: 900px) {  
    .grid-container-2 {
      grid-template-columns: 90vw;
      grid-template-rows: 300px repeat(3, 250px);
    }
    .item1 {
      grid-row: 1/2;
      background-position: left;
      margin-bottom: 15px;
    }
    .item2 {
      margin: 0px 0px 15px ;
    }
    .item3 {
      margin: 0px 0px 15px;
    }
    .item4 {
      margin: 0px 0px 15px;
    }
  }
  

  /* gioi thieu cho 2 hình */
  section.grid-container-3{
      background-color: var(--primary);
      padding: 50px 0px;
  }
  .grid-container-3 .intro-img3{
      border-radius: 10px;
      background-image: url(../img/hinh3.jpg);
      min-height: 280px;
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .grid-container-3 .intro-img2{
      border-radius: 10px;
      background-image: url(../img/hinh2.jpg);
      min-height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .grid-container-3 p{
      width: 75%;
  }
  .grid-container-3 h3{
      font-size: 30px;
      margin-bottom: 10px;
  }
  .grid-container-3 .text-item{
      display: flex;
      align-items: center;
  }
  h3.c1{
      text-align: right;
  }
  p.ct1{
      float: right;
      text-align: right;
  }

  /* hr custom */
  hr.sep-3 {
    display: none;
    border: none;
    height: 2px;
    background-image: linear-gradient(to right, #ccbdb8, gray, gray, #ccbdb8);;
  }
  hr.sep-3::after {
    color: var(--typo);
    content: 'CHODOCU';
    display: inline-block;
    border-radius: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 50% 50%;
    padding: 5px;
    background-color: white;
    font-size: 12px;
  }
  /* Custom breakpoint bootstrap */

  /* kích thước lg down */
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
/* Đánh giá từ khách hàng */
.grid-container-4{
  background-color: var(--secondary);
  padding: 50px 0px;
}
.avatar-img{
  width: 45px;
  height: 45px;
  margin-right: 20px;
  border-radius: 50px;
}
.grid-container-4 .client-cmt{
  border-radius: 15px;
}
.grid-container-4 .client-name {
  margin-bottom: 0px;
  font-size: 17px;
}
.grid-container-4 .client-rate  i{
  color: orange;
  font-size: 12px;
}

/* form dang ky thanh vien */
.grid-container-5{
  background-color: var(--primary);
  padding: 50px 0px;
}

#nhap_email{
  margin: 20px 0px 20px 0px;
  padding: 12px 120px 12px 12px;
  border-radius: 20px;
  border: white;
  box-shadow: 0px 10px 5px 0px rgb(165, 162, 162);
  width: 80%;
  margin:20px auto;
}
#dang_nhap{
  border: 2px solid white;
  box-shadow: 0px 10px 5px 0px rgb(165, 162, 162);
  margin: 0px auto;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  color: rgb(56, 56, 56);
  transition:all .2s;
}

#dang_nhap:hover{
  border-color: gray;
  background-color: gray;
  color: white;
}
/* Kích thưóc medium down */
@media (max-width: 767.98px) { 
  hr.sep-3{
      display: block;
    }
}
  /* kích thước sm down */
@media (max-width: 575.98px) {
    .h-banner{
        height: 250px;
    }
    
}
 

 /*Footer page*/
.footer_page a{
  text-decoration: none;
  color: black;
}
 .tieu_de{
  font-weight: 550;
  padding-right: 40px;
  padding-bottom: 10px;
}
.tieu_de .td1 a{
  padding-left: 60px;
}

.tieu_de .td2 a{
  padding-left: 30px;
}

.tieu_de .td3 a{
  padding-left: 50px;
}

.tieu_de .col{
  margin-bottom: 0;
}
.td4{
  text-align: right;
  font-size: 18px;
}
.nd a{
  display: block;
  margin-bottom: 20px;
  font-size: 15px;
}
.nd i{
  margin-right: 15px;
}
.nd1 a{
  padding-left: 25px;
}

.nd2 a{
  padding-left: 20px;
}
.footer_page{
  padding: 80px 50px 40px 50px;
}

.slogan_icon .icons{
font-size: 25px;
}


@media only screen and (max-width:768px){
/*Gioi_thieu_cho*/
.gioi_thieu_cho img{
height: 300px;
width: 450px;
padding: 50px;
}

.noi_dung_1{
padding-left: 400px;
font-family:Arial, Helvetica, sans-serif;
}
.noi_dung_2{
margin-top: -220px;
margin-right: 20px;
float: right;
font-family:Arial, Helvetica, sans-serif;
}

.noi_dung_1 #h1{
margin-top: -200px;
padding-left: 30px;
}

.noi_dung_1 #p1{
padding-bottom: 90px;
padding-top: 20px;
padding-left: 20px;
}
#h1, #h2{
font-size: 20px;
}

#p1, #p2{
font-size: 10px;
}

#p2, #h2{
margin-top: 20px;
margin-right: 25px;
}
#h2{
margin-left: 10px;
}

/*Loi_nhan*/

.loi_nhan h3, .loi_nhan p{
font-size: 10px;
}
.loi_nhan_1{
margin: 0px 73.5% 0px 50px;
padding: 0px 10px 50px 10px;
}

.loi_nhan .logo, .logo3, .logo1, .logo2, .logo4, .logo5{
font-size: 5px;
}

.loi_nhan_2{
margin: -13.2% 51.5% 0px 28%;
padding: 0px 10px 29px 10px;
}

.loi_nhan_3{
margin: -13.5% 30% 0px 49.7%;
padding: 10px 10px 52.5px 10px;
}

.logo2, .logo5{
padding: 0px 0px 0px 100px;
}
.loi_nhan_4{
margin: 2% 73.5% 0px 50px;
}

.loi_nhan_5{
margin: -15.7% 51.5% 0px 28%;
}

.loi_nhan_6{
margin: -16% 30% 0px 49.7%;
padding: 10px 10px 60.5px 10px;
}

.chu_thich{
margin: -30% 4% 0px 0px;
}

#hh{
font-size: 18px;
}

#hp{
font-size: 12px;
}
/*Mail form*/

#tg{
font-size: 20px;
}

#tg1{
font-size: 13px;
}

.f_mail{
margin: -170px 50px 0px 0px;
}



/*Footer page*/

.tieu_de a{
font-size: 13px;
}
.tieu_de .td1 a, .tieu_de .td2 a{
padding-left: 20px;
}

.tieu_de .td3 a{
padding-left: 30px;
}

.nd a{
margin-bottom: 8px;
font-size: 11px;
}
.nd i{
margin-right: 10px;
}
.nd1 a, .nd2 a{
padding-left: 10px;
}

.footer_page{
padding: 60px 40px 40px 40px;
}

.slogan_icon .icons{
font-size: 16px;
}

}

@media only screen and (max-width:425px){
/*Gioi_thieu_cho*/

.gioi_thieu_cho{
display: none;
}

/*Footer page*/

.nd3 #gmail, #dia_chi,
.tieu_de .td1, .td2, .td3, .nd1, .nd2,
.nd3{
display: none;
}
.slogan_icon{
margin-top: 15px;
margin-left: 20px;
}

}

nav{
  background-color: white
}

footer{
  background-color: white;
  display: inline-block;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;

}
.tieu_de{
  font-weight: 600;
  padding-right: 40px;
}
.tieu_de .td1 a{
  padding-left: 70px;
}

.tieu_de .td2 a{
  padding-left: 50px;
}

.tieu_de .td3 a{
  padding-left: 50px;
}

.tieu_de .td4 a{
  padding-left: 40px;
}

.tieu_de .col{
  margin-bottom: 0;
}
.td4{
  text-align: right;
  font-size: 25px;
}
.nd a{
  display: block;
  margin-bottom: 20px;
}
.nd i{
  margin-right: 15px;
}
.nd1 a{
  padding-left: 70px;
}

.nd2 a{
  padding-left: 40px;
}
.nd3 a{
  padding-left: 20px;
}
.footer_page{
  padding: 80px 50px 40px 50px;
}

.icons{
   margin-top: 20px;
   font-size: 30px;
   padding-left: 85px;
}


</style>