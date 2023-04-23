<template>
    <div class="BigDiv">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 cards" v-for="i in 9">
                <div class="card">
                    <img class="card-img-top" src="../assets/car.svg" alt="Card image cap" v-if="i == 1">
                    <img class="card-img-top" src="../assets/Building-amico.svg" alt="Card image cap" v-if="i == 2">
                    <img class="card-img-top" src="../assets/Fishing-pana.svg" alt="Card image cap" v-if="i == 3">
                    <img class="card-img-top" src="../assets/weeding.svg" alt="Card image cap" v-if="i == 4">
                    <img class="card-img-top" src="../assets/heptite.svg" alt="Card image cap" v-if="i == 5">
                    <img class="card-img-top" src="../assets/smarthome.svg" alt="Card image cap" v-if="i == 6">
                    <img class="card-img-top" src="../assets/محلات_تجارية.svg" alt="Card image cap" v-if="i == 7">
                    <img class="card-img-top" src="../assets/Process-.svg" alt="Card image cap" v-if="i == 8">
                    <img class="card-img-top" src="../assets/bicycle.svg" alt="Card image cap" v-if="i == 9">
                    <div class="card-body text-center">
                        <h5 class="card-title">Cars</h5>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.cards {
    margin-bottom: 10px;
}

.card {
    min-height: 250px;
    ;
}

.card img {
    width: 250px;
    text-align: center;
    margin: auto;
}

.BigDiv {
    overflow-x: hidden;
}

</style>

<script>
import { onMounted } from 'vue';


export default {
    data() {
        return {

        }
    },

}

</script>