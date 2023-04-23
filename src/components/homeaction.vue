<template>
    <div>
        <!--Section for categories-->
        <section class="mt-5">
            <div class="container">
                <!--For flex Category and watch-->
                <div class="d-flex justify-content-between align-items-baseline">
                    <div>
                        <p class="fs-4">All Categories</p>
                    </div>
                    <div>
                        <router-link to="/allcategories" class="link">Watch All</router-link>
                    </div>
                </div>
                <!--For prducts-->
                <div class="wrapper">
                    <div class="icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
                    <ul class="tabs-box">
                        <li class="tab" v-for="i in 7">
                            <router-link to="/allcategories" v-if="i == 1"><img src="../assets/car.svg"
                                    alt=""></router-link>
                            <router-link to="/allcategories" v-else-if="i == 2"><img src="../assets/bicycle.svg"
                                    alt=""></router-link>
                            <router-link to="/allcategories" v-else-if="i == 3"><img src="../assets/Building-amico.svg"
                                    alt=""></router-link>
                            <router-link to="/allcategories" v-else-if="i == 4"><img src="../assets/Consulting-bro.svg"
                                    alt=""></router-link>
                            <router-link to="/allcategories" v-else-if="i == 5"><img
                                    src="../assets/freepik--Microscope--inject-101.svg" alt=""></router-link>
                            <router-link to="/allcategories" v-else-if="i == 6"><img src="../assets/Consulting-bro1.svg"
                                    alt=""></router-link>
                            <router-link to="/allcategories" v-else><img src="../assets/freepik--Microscope--inject-101.svg"
                                    alt=""></router-link>
                        </li>
                    </ul>
                    <div class="icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
                </div>
                <!--For prducts-->
                <div class="row">
                    <div class="big_card col-lg-4 col-md-6 col-sm-12" v-for="result in results"
                        :key="result.id">
                        <div class="card">
                            <img :src="result.image" class="card-img-top" alt="Result">
                            <div class="card-body">
                                <h5 class="card-title">{{ result.title }}</h5>
                                <p class="card-text">
                                    {{ result.desc }}
                                </p>
                            </div>
                            <button class="btn fav">Add To Favourite</button>
                        </div>
                    </div>
                    <div class="big_card col-lg-4 col-md-6 col-sm-12" v-for="anot_res in another_res"
                        :key="anot_res.id">
                        <div class="card">
                            <img :src="anot_res.image" class="card-img-top" alt="Result">
                            <div class="card-body">
                                <h5 class="card-title">{{ anot_res.title }}</h5>
                                <p class="card-text">
                                    {{ anot_res.desc }}
                                </p>
                            </div>
                            <button class="btn fav">Add To Favourite</button>
                        </div>
                    </div>
                    <div class="big_card col-lg-4 col-md-6 col-sm-12" v-for="prod_res_alone in prod_res"
                        :key="prod_res_alone.id">
                        <div class="card">
                            <img :src="prod_res_alone.image" class="card-img-top" alt="Result">
                            <div class="card-body">
                                <h5 class="card-title">{{ prod_res_alone.title }}</h5>
                                <p class="card-text">
                                    {{ prod_res_alone.desc }}
                                </p>
                            </div>
                            <button class="btn fav">Add To Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Section categories-->
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            results: [],
            another_res:[],
            prod_res:[],
        };
    },
    mounted() {
        const tabsBox = document.querySelector(".tabs-box"),
            allTabs = tabsBox.querySelectorAll(".tab"),
            arrowIcons = document.querySelectorAll(".icon i");

        let isDragging = false;

        const handleIcons = (scrollVal) => {
            let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
            arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
            arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
        }

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
                let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
                handleIcons(scrollWidth);
            });
        });

        // allTabs.forEach(tab => {
        //     tab.addEventListener("click", () => {
        //         tabsBox.querySelector(".active").classList.remove("active");
        //         tab.classList.add("active");
        //     });
        // });

        const dragging = (e) => {
            if (!isDragging) return;
            tabsBox.classList.add("dragging");
            tabsBox.scrollLeft -= e.movementX;
            handleIcons(tabsBox.scrollLeft)
        }

        const dragStop = () => {
            isDragging = false;
            tabsBox.classList.remove("dragging");
        }

        tabsBox.addEventListener("mousedown", () => isDragging = true);
        tabsBox.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);





    },
    async created() {
        let res = await axios.get('https://api.lepgo.online/api/v1/products', {
            headers: {
                Authorization: 'Bearer ' + "134|UYwt1jnWqPxS2DICuajEiQmhLduQpzzXm9kS57aB"
            }
        })
        this.results = await res.data.data;

        let another_res = await axios.get('https://api.lepgo.online/api/v1/products?page=1',{
            headers: {
                Authorization: 'Bearer ' + "134|UYwt1jnWqPxS2DICuajEiQmhLduQpzzXm9kS57aB"
            }
        })
        this.another_res = await another_res.data.data

        let Prod_res2 = await axios.get("https://api.lepgo.online/api/v1/products?page=3",{
            headers: {
                Authorization: 'Bearer ' + "134|UYwt1jnWqPxS2DICuajEiQmhLduQpzzXm9kS57aB"
            }
        })
        this.prod_res = await Prod_res2.data.data
        console.log(this.prod_res[0]);
    },

};
</script>

<style scoped>
.fav {
    background-color: #CB955B;
    color: white;
}

.card {
    padding: 10px;
    margin: 8px;
    min-height: 450px;
}

.card img {
    width: 100%;
    height: 350px;
}

.card-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    direction: rtl;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    border-radius: 50%;
    background-color: #f5f5f5;
}

.link {
    text-decoration: none;
    font-size: 20px;
    color: #CB955B;
}

.nav-item img {
    width: 80px;
}

.card {
    max-height: 500px;
    overflow: auto;
}

.card img {
    width: 100%;
    max-height: 250px;
}

/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');




.wrapper {
    padding: 35px;
    position: relative;
    overflow-x: hidden;
    max-width: 1000px;
    background: #fff;
    border-radius: 13px;
    margin: auto !important;
}

.wrapper .icon {
    position: absolute;
    top: 0;
    height: 100%;
    width: 120px;
    display: flex;
    align-items: center;
}

.icon:first-child {
    left: 0;
    display: none;
    background: linear-gradient(90deg, #fff 70%, transparent);
}

.icon:last-child {
    right: 0;
    justify-content: flex-end;
    background: linear-gradient(-90deg, #fff 70%, transparent);
}

.icon i {
    width: 55px;
    height: 55px;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: center;
    line-height: 55px;
    border-radius: 50%;
}

.icon i:hover {
    background: #efedfb;
}

.icon:first-child i {
    margin-left: 15px;
}

.icon:last-child i {
    margin-right: 15px;
}

.wrapper .tabs-box {
    display: flex;
    gap: 12px;
    list-style: none;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.tabs-box.dragging {
    scroll-behavior: auto;
    cursor: grab;
}

.tabs-box .tab {
    cursor: pointer;
    font-size: 1.18rem;
    white-space: nowrap;
    background: #f5f4fd;
    padding: 13px 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #d8d5f2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tabs-box .tab img {
    width: 40px;
    text-align: center;
}

.tabs-box .tab:hover {
    background: #efedfb;
}

.tabs-box.dragging .tab {
    user-select: none;
    pointer-events: none;
}

.tabs-box .tab.active {
    color: #fff;
    background: #5372F0;
    border-color: transparent;
}

@media (max-width: 768px) {

    ul li {
        text-align: center;
        margin: 5px;
    }

    ul li img {
        margin: auto;
    }
}
</style>
