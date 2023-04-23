<template>
    <!--Section Add Products-->
    <section class="Addproduct">
        <div>
            <h4 class="text-center">اضافة منتج</h4>
        </div>
        <div class="details_product shadow m-auto py-4">
            <div id="drop-area">
                <form class="my-form text-center">
                    <div>
                        <div id="img-preview">
                            <img src="../assets/add_to_photos.svg" alt="">
                        </div>
                        <input type="file" id="choose-file" name="choose-file" accept="image/*" />
                        <label for="choose-file">Choose File</label>
                    </div>
                    <!-- <div id="trustForm">
                        <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)">
                        <label class="button" for="fileElem">
                            <img src="../assets/Uploading-bro.svg" alt="">
                        </label>
                        <br>
                        <span>أضافة منتج</span>
                    </div> -->
                    <div>
                        <label for="cars">تحديد نوع المنتج</label>
                        <br>
                        <select id="cars" name="cars">
                            <option value="volvo">سيارات</option>
                            <option value="saab">اجهزة الكترونيه</option>
                            <option value="fiat">اجهوه كهربائيه</option>
                            <option value="audi">اجهزه طبيه</option>
                        </select>
                    </div>
                    <div>
                        <label for="text">اسم المنتج</label>
                        <br>
                        <input type="text" name="text" id="text">
                    </div>
                    <div class="d-flex justify-content-evenly align-items-center price mt-3">
                        <div>
                            <label for="text">السعر</label>
                            <br>
                            <input type="text" name="text" id="text">
                        </div>
                        <div>
                            <label for="text">المده</label>
                            <br>
                            <input type="text" name="text" id="text">
                        </div>
                        <div>
                            <label for="text">الخصم</label>
                            <br>
                            <input type="text" name="text" id="text">
                        </div>
                    </div>
                    <div class="d-flex justify-content-evenly  s mt-3">
                        <div>
                            <label for="place">تحديد المكان</label>
                            <br>
                            <input type="text" id="place">
                        </div>
                        <div class="square">
                            <img src="../assets/location_pin.svg" alt="">
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="descripe">وصف المنتج</label>
                        <br>
                        <textarea name="textarea" id="textarea" cols="80" rows="5"></textarea>
                    </div>
                    <button class="btn" id="add">اضافه</button>
                </form>
            </div>
        </div>
    </section>
    <!--Section Add Products-->
</template>


<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        const chooseFile = document.getElementById("choose-file");
        const imgPreview = document.getElementById("img-preview");

        chooseFile.addEventListener("change", function () {
            getImgData();
        });

        function getImgData() {
            const files = chooseFile.files[0];
            if (files) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function () {
                    imgPreview.style.display = "block";
                    imgPreview.innerHTML = '<img src="' + this.result + '"  style="width:90%"/>';
                });
            }
        }
    }
}
</script>

<style scoped>
#img-preview {
    display: none;
    width: 355px !important;
    margin: auto;
    margin-bottom: 20px;
}

#img-preview img {
    max-width: 90px !important;
    height: auto;
    display: block;
    border: 10px solid #000;
}

[type="file"] {
    height: 0;
    width: 0;
    overflow: hidden;
}

[type="file"]+label {
    font-family: sans-serif;
    background: #CB955B;
    padding: 10px 30px;
    border: 2px solid #CB955B;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
}

[type="file"]+label:hover {
    background-color: #fff;
    color: #000;
}

.details_product {
    /* background-color: #F9F9FA;    */
    width: 80%;
}

.my-form span {
    display: inline-block;
    padding: 10px;
    background-color: var(--colorMain);
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    width: 150px;
    color: #666666;
}


#trustForm {
    background-color: #fff;
    border: 2px dashed #ccc;
    border-radius: 20px;
    width: 480px;
    font-family: sans-serif;
    margin: 20px auto;
    padding: 20px;
}

#fileElem {
    display: none;
}

#cars,
input[type="text"] {
    width: 350px;
    border: 1px solid #DDDBDA;
    outline: none;
    padding: 15px;
    color: #DDDBDA;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}

option {
    color: black;
}

.price div {
    width: 150px;
}

.price div input[type="text"] {
    width: 100%;
}

.square {
    width: 50px;
    background-color: #DDDBDA;
    padding: 10px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}

textarea {
    border: 1px solid #DDDBDA;
}

#add {
    background-color: var(--colorMain);
    margin-top: 10px;
}

.s {
    text-align: center;
}</style>