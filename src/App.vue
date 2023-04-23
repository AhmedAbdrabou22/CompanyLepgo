<template>
  <div>
    <div class="nav">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center parent">
          <!--Div For logo-->
          <div class="logo">
            <!-- <p>lep<span>go</span> </p> -->
            <router-link to="/" id="home">lep<span>go</span></router-link>
          </div>
          <!--Div for logo-->

          <!--div for category-->
          <div class="box_search">
            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center align-items-center shadow s">
              <div>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-search"
                    aria-hidden="true"></i></button>
              </div>

              <div>
                <select name="city" id="city">
                  <option value="mansoura">Mansoura</option>
                  <option value="samnoud">Samnoud</option>
                  <option value="cairo">cairo</option>
                  <option value="Aswan">Aswan</option>
                </select>
              </div>

              <div>
                <select name="category" id="category">
                  <option value="cars">cars</option>
                  <option value="HeadPhones">HeadPhones</option>
                </select>
              </div>
            </div>
            <!-- Modal -->
            <div class="modal fade me-auto" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"><i class="fa fa-search"
                        aria-hidden="true"></i></span>
                    <input type="text" name="search" id="search" placeholder="Okay, What are you looking For ? "
                      class="form-control" aria-label="Username" aria-describedby="addon-wrapping">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--div for category-->

          <!--Div Profile For Image-->
          <div class="profile d-flex justify-content-between align-items-center">
            <div class="dropdown">
              <img src="./assets/Consulting-bro.svg" class="dropdown-toggle" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false" alt="">
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Setting</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <router-link class="dropdown-item" to="/addProduct">Add Product</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/favourite">favourite</router-link>
                </li>
                <li><a class="dropdown-item" href="#">Contact us</a></li>
                <li>
                  <router-link to="/login" class="dropdown-item">Log in</router-link>
                </li>
                <li><a class="dropdown-item" href="#">Register</a></li>
                <li><a class="dropdown-item" href="#">Log out</a></li>
              </ul>
            </div>
            <!-- Off canvas for responsive  -->

            <div class="canvas_toggle">
              <img src="./assets/Consulting-bro.svg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight" alt="">

              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">Profile</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul>
                    <li>
                      <router-link class="dropdown-item" to="/addProduct">Add Product</router-link>
                    </li>
                    <li><a href="#">Setting</a></li>
                    <li><a href="#">Profile</a></li>
                    <li>
                      <router-link class="dropdown-item" to="/favourite">favourite</router-link>
                    </li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Log out</a></li>
                  </ul>
                </div>
              </div>
              <!-- Off canvas for responsive  -->
            </div>

            <div class="notfications mx-2">
              <i class="fa-solid fa-bell mx-2 dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                aria-expanded="false"></i>
              <ul class="dropdown-menu dropit" aria-labelledby="dropdownMenuButton2">
                <div class="notification" dir="rtl">
                  <div class="container">
                    <h4 class="text-center">الاشعارات</h4>
                    <div class="true">
                      <div
                        class="notification_Detials d-flex justify-content-between align-items-center w-50 m-auto text-center">
                        <div class="info">
                          <p>تم إنتهاء مدة حجز بلاي استيشن 4</p>
                          <span>مرحباا عميلنا العزيز هل تريد مد فترة الحجز …….</span>
                        </div>
                        <div class="circle"></div>
                      </div>

                      <div
                        class="notification_Detials d-flex justify-content-between align-items-center w-50 m-auto text-center">
                        <div class="info">
                          <p>شكرا لإضافة بطاقة دفع</p>
                          <span>للإيجار LEPGOمرحبا بك في تطبيق ......…..</span>
                        </div>
                        <div class="circle"></div>
                      </div>

                      <div
                        class="notification_Detials d-flex justify-content-between align-items-center w-50 m-auto text-center">
                        <div class="info">
                          <p>BMW500</p>
                          <span>.مرحباا عميلنا العزيز هذا المنتج متاح لان ......…..</span>
                        </div>
                        <div class="circle"></div>
                      </div>

                      <div
                        class="notification_Detials d-flex justify-content-between align-items-center w-50 m-auto text-center">
                        <div class="info">
                          <p>شكرا لتقيمك التطبيق</p>
                          <span>للإيجار LEPGOمرحبا بك في تطبيق......…..</span>
                        </div>
                        <div class="circle"></div>
                      </div>

                      <div
                        class="notification_Detials d-flex justify-content-between align-items-center w-50 m-auto text-center">
                        <div class="info">
                          <p>شكرا لإضافة بطاقة دفع</p>
                          <span>للإيجار LEPGOمرحبا بك في تطبيق......…..</span>
                        </div>
                        <!-- <div class="circle"></div> -->
                      </div>

                      <div
                        class="notification_Detials d-flex justify-content-between align-items-center w-50 m-auto text-center">
                        <div class="info">
                          <p>مرحبا بك</p>
                          <span>للإيجار LEPGOمرحبا بك في تطبيق......…..</span>
                        </div>
                        <!-- <div class="circle"></div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <!--Section Notification-->
              </ul>
              <!-- <i class="fa-solid fa-heart mx-2"></i> -->
            </div>
          </div>
          <!--Div Profile For Image-->

        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style>
router-link {
  text-decoration: none;
}

.nav {
  padding: 10px;
}

.nav .profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  background-color: #CB955B;
}

#home {
  text-decoration: none;
  font-size: 32px;
  font-style: Helvetica;
  color: #000;
}

#home span {
  color: #CB955B;
}

.box_search,
.s {
  border-radius: 50px;
  padding: 10px;
}

.s div {
  margin: 8px;
}

/* .box_search div {
  margin: 10px;
} */

.box_search button,
.button_responsive button {
  background-color: #CB955B;
  color: white;
  border-radius: 50px;
  border: none;
  text-align: end;
}

.button_responsive button {
  display: none;
}

.box_search select {
  border: 1px solid #F5F5F5;
  padding: 8px;
  border-radius: 20px;
  outline: none;
  line-height: 1.4;
}

.box_search select {
  background-color: #ffffff;
  color: #333333;
  font-size: 16px;

}




.profile {
  cursor: pointer;
}

.dropit {
  width: 450px;
  transform: translate(1042px, 80px) !important;
}

.canvas_toggle {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.offcanvas-body ul {
  list-style: none;
}

.offcanvas-body ul li {
  margin: 10px;
  text-align: start;
}

.offcanvas-body ul li a {
  text-decoration: none;
  color: black;
}

.notfications i {
  font-size: 25px;
  color: #CB955B;
}

.notification .notification_Detials {
  margin-bottom: 50px;
  border: 2px solid #FCF8F3;
  padding: 20px;
  width: 100% !important;
}

.notification .notification_Detials:hover {
  background-color: #FCF8F3;
}

.notification .notification_Detials .info {
  line-height: 20%;
}

.notification .notification_Detials .info span {
  color: #666666;
}

.notification .notification_Detials .circle,
.big_chat .chat .circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  background-color: #CB955B;
}

@media(max-width:768px) {
  .profile .dropdown {
    display: none;
  }

  .canvas_toggle {
    display: block;
  }

  .box_search select {
    display: none;
  }

  .dropit {
    width: 350px;
    transform: translate(12px, 90px) !important;
  }
}
</style>
