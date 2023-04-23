<template>
    <div>
        <div class="container">
            <div class="m-auto items" v-for="product in Fav_products">
                <div class="image row py-3 px-3 shadow">
                    <div dir="rtl" class="col-lg-8">
                        <p>{{ product.title }}</p>
                        <p>{{ product.desc }}</p>
                        <p>{{ product.city }}</p>
                    </div>
                    <div class="imgs col-lg-3">
                        <img :src="product.image" alt="" class="px-3">
                        <!-- <div class="heart"><i class="fa-solid fa-heart" id="heart"></i></div>   -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.imgs img {
    width: 100%;
    height: min-content;
}

.fav_items .image {
    position: relative;
    background-color: #F9F9FA;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    margin-bottom: 20px;
}

.fav_items .image .heart {
    position: absolute;
    top: 1%;
    left: 1%;
}

.fav_items .image img {
    width: 30% !important;
}

.items {
    width: 50%;
}

#heart {
    color: red;
}
</style>



<script>
import axios from 'axios'
export default {
    data() {
        return {
            Fav_products: [],
        }
    },

    // async created() {
    //     let favouriteProducts = await axios.get('https://api.lepgo.online/api/v1/favorites/',{
    //         headers: {
    //             Authorization: 'Bearer ' + "134|UYwt1jnWqPxS2DICuajEiQmhLduQpzzXm9kS57aB"
    //         }
    //     })
    //     this.fav_product = await favouriteProducts.data
    //     console.log(this.fav_product.data);
    // },
    async mounted() {
        let favProducts = axios.get('http://localhost:8080/api/v1/favorites/', {
            headers: {
                Authorization: 'Bearer ' + "134|UYwt1jnWqPxS2DICuajEiQmhLduQpzzXm9kS57aB"
            }
        })
        this.Fav_products = (await favProducts).data.data
    },
}
</script>