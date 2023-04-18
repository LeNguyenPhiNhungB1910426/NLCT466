<script>
import ContactService from "@/services/contact.service";

export default{
    data(){
        return{
            data: {},
            allCongVan: [],
            serachValue: '',
            filteredValue: ''
        }
    },
    methods:{
        async getAll(){
            this.allCongVan = await ContactService.getAll();
            console.log(this.allCongVan);
        },
        changeFile(e){
            const file = e.target.files[0]
            this.data.File= file;
            console.log( this.data.File);
        },
        async addCongVan(){
            var formData = new FormData();
            formData.append("file",this.data.File);
            formData.append("SoCongVan",this.data.SoCongVan);
            formData.append("TenCongVan",this.data.TenCongVan);
            formData.append("LoaiCongVan",this.data.LoaiCongVan);
            formData.append("DonViGui",this.data.DonViGui);
            // formData.append("NguoiGui",this.data.NguoiGui);
            console.log(formData.get("file"));
            const rs = await ContactService.create(formData);
            this.getAll();
            this.data={}
        },
        async delete(id){
            console.log(id);
            const rs = await ContactService.delete(id);
            this.getAll();
        },
        search(){
            this.getAll();
            setTimeout(
                ()=>{
                    if(this.serachValue!=''){
                this.allCongVan=this.allCongVan.filter(e=>e.TenCongVan.includes(this.serachValue));
            }
                },100
            )
        },
        filtered(){
            this.getAll();
            setTimeout(
                ()=>{
                    if(this.filteredValue!=''){
                this.allCongVan=this.allCongVan.filter(e=>e.LoaiCongVan.includes(this.filteredValue));
            }
                },100
            )
        }
        
    },
    mounted(){
        this.getAll();
    }
}
</script>

<template>

    <body style="background-color: whitesmoke">
        <div class="sidebar">
            <div class="logo-content">
                <div class="logo">
                    <b>QUẢN LÝ CÔNG VĂN</b>
                </div>
            </div>
            <hr />
            <ul class="menu-list">
                <li class="menu-item">
                    <a href="">
                        <i class="fa-solid fa-file"></i>
                        <span class="item-name">Công văn đến</span>
                    </a>
                </li>
                <li class="menu-item">
                    <!-- <button class="btn-dropdown"> -->
                        <a href="">
                            <i class="fa-solid fa-file"></i>
                            <span class="item-name">Công văn đi</span>
                        </a>
                    <!-- </button> -->
                    <!-- <div class="dropdown-container">
                        <a href="#">Tạo đơn và giao hàng</a>
                        <a href="/donhang.html">Danh sách đơn hàng</a>
                        <a href="#">Khách trả hàng</a>
                    </div> -->
                </li>
                <!-- <li class="menu-item">
                    <button class="btn-dropdown">
                        <i class=""> </i>
                        <i class=""></i>
                    </button> -->
                    <!-- <div class="dropdown-container">
          <a href="#">Danh mục sản phẩm</a>
          <a href="#">Quản lý kho</a>
          <a href="#">Nhập hàng</a>
          <a href="#">Kiểm hàng</a>
        </div> -->
                <!-- </li> -->
                <!-- <li class="menu-item">
        <button class="btn-dropdown">
          <i class=""></i> -->

                <!-- <i class="fas fa-angle-right"></i>
        </button>
        <div class="dropdown-container">
          <a href="#">Danh mục khách hàng</a>
          <a href="#">Nhóm khách hàng</a>
        </div>
      </li> -->
                <!-- <li class="menu-item">
                    <a href="#">
                        <i class=""></i>
                        <span class="item-name"></span>
                    </a>
                </li> -->

                
                <li class="menu-item">
                    <a href="#">
                        <i class="fas fa-cog"></i>
                        <span class="item-name">Hệ thống</span>
                    </a><br>
                    <router-link to="/">
                            <a href="">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span class="item-name">Logout</span>
                            </a>
                    </router-link>
                </li>
            </ul>
        </div>
        <main class="main-page">
            <div class="nav-bar mb-6 mb-lg-0 d-flex">
                <router-link to="/">
                    <!-- <button class="btn logout-btn" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Đăng Xuất">
                            <i class="fas fa-sign-out-alt"></i>
                    </button> -->
                </router-link>
                <!-- <button type="button" class="btn-bars">
                    <span class="" style="vertical-align: middle"></span>
                </button> -->
                <p style="flex-grow: 1; text-indent: 10px; font-size: 20px"></p>

            </div>
            <div class="filter-area">
                <div class="filter-below">
                    <div class="search-div" style="flex-grow: 1">
                        <div class="search_bar s-custom">
                            <i class="fa fa-search"></i>
                            <input type="text" placeholder="Tìm kiếm bằng tên công văn, số công văn,..." v-model="this.serachValue"  @input="this.search()"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style=" display: flex;flex-direction: column;width: 95%; margin: 20px auto;">
                <div class="filter-item" style="display: flex;">
                    <button class="create-product" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm công văn
                    </button>
                    <div style="display: flex; flex-direction: row;">
                        <!-- <div> 
                            <button class="btn-1 opt-filter">
                                Loại công văn
                                <i class="fas fa-caret-down"></i>
                            </button>
                            <ul class="option-list opt-tt-list">
                                <li><button>Nghị quyết</button></li>
                                <li><button>Quyết định</button></li>
                                <li><button>Báo cáo</button></li>
                                <li><button>Kế hoạch</button></li>
                            </ul>
                        </div>  -->
                        <!-- <div>
                            <button class="btn-1 opt-filter">
                                Ngày gửi
                                <i class="fas fa-caret-down"></i>
                            </button>
                            <ul class="option-list">
                                <li><button>Hôm nay</button></li>
                                <li><button>Hôm qua</button></li>
                                <li><button>Trong tuần</button></li>
                                <li><button>Trong tháng</button></li>
                                <li><button>Tùy chọn khác</button></li>
                            </ul>
                        </div> -->
                    </div>

                </div>


                <!-- Modal -->
                
                <!-- form thêm công văn mới -->

            </div>
            <br>
            <table class=" bill-table">
                <thead>
                    <tr>
                        <th>Số công văn</th>
                        <th>Tên công văn</th>
                        <th>Loại công văn</th>
                        <th>Đơn vị gửi</th>
                        <!-- <th>Người gửi</th> -->
                        <th>Ngày Nhận</th>
                        <th>File</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(e,i) in this.allCongVan" :key="i">
                    <td>{{e.SoCongVan}}</td>
                    <td>{{e.TenCongVan}}</td>
                    <td>{{e.LoaiCongVan}}</td>
                    <td>{{e.DonViGui}}</td>
                    <!-- <td>{{e.NguoiGui}}</td> -->
                    <td>{{e.NgayNhan}}</td>
                    <td>{{e.File}}</td>
                    <td><i class="fa-solid fa-trash text-danger" @click="this.delete(e._id)"></i></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header text-align: center;">
                                <h5 class="modal-title" id="exampleModalLabel">THÊM CÔNG VĂN</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label for="ma-sp">Số công văn</label>
                                <input type="text" class="form-control" v-model="this.data.SoCongVan" id="msp" placeholder="Số công văn" required />

                                <label for="ten-sp">Tên công văn</label>
                                <input type="text" class="form-control" v-model="this.data.TenCongVan" id="tsp" placeholder="Tên công văn" required />

                                <label for="ma-sp">Loại công văn</label>
                                <input type="text" class="form-control" v-model="this.data.LoaiCongVan" id="msp" placeholder="Loại công văn" required />

                                <label for="gia-sp">Đơn vị gửi </label>
                                <input type="text" class="form-control" v-model="this.data.DonViGui" id="gsp" placeholder="Đơn vị gửi" required />

                                <!-- <label for="gia-sp">Người gửi </label> -->
                                <!-- <input type="text" class="form-control" v-model="this.data.NguoiGui" id="gsp" placeholder="Người gửi" required /> -->

                                <label for="gia-sp">File công văn </label>
                                <input type="file" class="form-control" @change="changeFile" id="gsp" placeholder="Người gửi" required />
                            </div>
                            <div class="modal-footer">
                                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="this.addCongVan">Thêm Công Văn</button>
                            </div>
                        </div>
                    </div>
                </div>
    </body>
</template>

<style scoped>

* {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}

li,
a {
    /*text-decoration: none; */
    list-style: none;
}

i {
    width: 35px;
    text-align: center;
}

.sidebar {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #110d40;
    overflow-x: hidden;
    color: whitesmoke;
}

a:active {
    color: gray;
}

.sidebar a,
.btn-dropdown {
    color: whitesmoke;
    padding: 6px 8px 6px 8px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}

/* logo and Admin Dashboard */
.logo-content .logo {
    text-align: center;
    line-height: 50px;
    font-size: 28px;
}

.logo-content .logo i {
    padding: 0px 10px;
    line-height: 50px;
}

.logo-content i {
    float: right;
}

button, .login-btn,.logout-btn {
    padding: 9px 25px;
    border: 2px solid;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    background-color: inherit;
  }

/* menu - list */
.fa-chevron-down {
    float: right;
}

.fa-angle-right {
    float: right;
}

.fa-angle-down {
    float: right;
}

.dropdown-container {
    display: none;
}

.dropdown-container a {
    font-size: 15px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 35px;
}

/* Menu Item */
.item-name {
    font-size: 16px;
}

.sidebar .menu-item i {
    padding: 10px 0px;
    font-size: 16px;
}

.sidebar .menu-item:hover,
.dropdown-container a:hover {
    color: #e9d8a6;
}

.menu-item a:active {
    color: #005f73;
}

/* mainpage */
.main-page {
    margin-left: 200px;
    background-color: white;
}

.nav-bar {
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.btn-bars {
    width: 45px;
    height: 45px;
    margin-left: 5px;
    border: none;
    border-radius: 50%;
    background-color: white;
}

.btn-bars:hover {
    background: whitesmoke; 
    cursor: pointer;
}

.fa-bars {
    font-size: 19px;
    text-align: center;
}

/* thanh tim kiem */
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
    background-color: #faf5f3;
}

.search_bar>i {
    min-width: 40px;
    text-align: center;
}

.search_bar>input {
    flex: 1;
    height: inherit;
    border: none;
    outline: none;
    background-color: inherit;
    font-size: 16px;
}

/* avatar admin */
.avatar-div {
    display: flex;
    align-items: center;
    margin: 0px 15px;
}

.statistic-container {
    margin: 20px auto;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 60px 120px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
}

.statistic-item:first-child {
    grid-column: 1/5;
    border-bottom: 2px solid whitesmoke;
}

.statistic-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.statistic-item:not(:first-child):hover {
    background-color: ghostwhite;
}

.item-header {
    text-align: center;
    font-size: 20px;
}

.item-header p {
    font-size: 21px;
    margin-top: 3px;
}

.statistic-item i {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: yellowgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 20px;
    color: white;
}

/* table-bill */
.bill-table {
    border-collapse: collapse;
    width: 95%;
    margin: 20px auto;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
}

.table-name {
    text-indent: 15px;
    font-size: 20px;
}

.btn-option {
    background-color: #fbfbfb;
    border: 1px solid gainsboro;
    color: black;
    padding: 10px 12px 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

.option-list {
    margin-top: 3px;
    border: 1px solid gainsboro;
    border-radius: 8px;
    color: black;
    display: none;
    background-color: white;
    position: absolute;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 5px;
    z-index: 1;
}

.option-list li button {
    cursor: pointer;
    padding: 10px 20px;
    width: 152px;
    background-color: white;
    border: none;
    margin: 1px auto;
    border-radius: 6px;
}

.option-list li button:hover {
    background-color: ghostwhite;
}

tr {
    height: 60px;
    font-size: 16px;
}

th,
td {
    text-align: left;
}

tr {
    border: 1px solid whitesmoke;
}

tr:nth-child(odd) {
    background-color: #fafafa;
}

tr:first-child {
    background-color: white;
}

tr:nth-child(2) {
    background-color: white;
}

th:first-child {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
}

tr:not(:nth-child(2)):hover {
    background-color: #caf0f8;
}

tr:first-child:hover {
    background-color: white;
}

.status-bill-order {
    color: #4cc9f0;
}

.status-bill-cancel {
    color: #f28482;
}

.status-bill-delivery {
    color: #ff7f51;
}

.status-bill-done {
    color: #7fc0aa;
}

/* DANH SÁCH ĐƠN HÀNG */
.filter-area {
    margin: 20px auto;
    width: 95%;
    display: flex;
    flex-direction: column;
}

.btn-1 {
    margin-left: 10px;
    background-color: #fbfbfb;
    border: 1px solid gray;
    padding: 10px 12px 10px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
}

.btn {
    margin-left: 5px;
}

.create-product {
    border: 1px solid gray;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #110d40;
    color: white;
}

.export-file {
    display: flex;
    margin-left: 5px;
    color: #4cc9f0;
}

.filter-below {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
}

.s-custom {
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    height: 41px;
}

/* select dropdown option */
.select-option option {
    padding: 20px;
    color: #4cc9f0;
    height: 50px;
}

.tag-input {
    height: 40px;
    border-collapse: collapse;
    border-radius: 5px;
    padding-left: 10px;
}

/* Add, Modify and Delete on data table */

.btn-act {
    height: 40px;
    width: 40px;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;
}

.btn-edit {
    background-color: #0a9396;
}

.btn-delete {
    background-color: #9b2226;
}

.fa-pen {
    color: white;
}

.fa-trash-alt {
    color: white;
}

.sold-out {
    color: #ff7f51;
}

@media (max-width: 768px) {
    .filter-below {
        flex-direction: column;
    }

    .create-product {
        padding: 10px 10px;
    }

    .opt-filter {
        padding: 10px 0px 10px 8px;
    }

    .opt-filter i {
        width: 20px;
    }

    .statistic-container {
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: 60px 120px 120px;
    }

    .statistic-item:first-child {
        grid-column: 1/3;
        margin-right: 10px;
    }
}


@media (max-width: 426px) {
    .filter-item {
        flex-direction: column-reverse;
    }

    .filter-item div {
        margin-bottom: 5px;
    }

    .btn {
        margin-left: 0px;
    }

    .opt-filter:nth-child(1) {
        margin-left: 5px;
    }

    th,
    td {
        text-align: center;
        font-size: 15px;
    }

    th:first-child {
        width: 30px;
    }

    .btn-act {
        height: 20px;
        width: 20px;
        border-radius: 5px;
    }

    .btn-act i {
        width: inherit;
        font-size: 10px;
    }

}

/* form tạo sản phẩm */
#frm-taosp {
    margin-top: 20px;
    width: 95%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    background: white;
}

#frm-taosp label {
    margin: 15px 0px 10px;
    font-size: 20px;
    width: 150px;
}

#msp,
#tsp,
#gsp {
    height: 50px;
    font-size: 16px;
    border-radius: 8px;
    padding: 5px 10px;
}

#frm-taosp button {
    margin: 15px 0px;
    background: #f3d9ca;
}
</style>