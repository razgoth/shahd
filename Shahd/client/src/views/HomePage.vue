<template>
    <div class="container">
        <nav>
            <div></div>
            
            <img class="logo" src="../assets/‎shahd-logo.png" alt="Logo">
            <router-link class="router-link" to="/login">Login</router-link>
        </nav>
        <div class="images">
            <div class="border">
                <img class="people" src="../assets/shahd.jpg" alt="image of people">
                <div>
                    <h2>شعارنا</h2>
                    <h4>نعطيهم شهد الدنيا لنعطى شهد الآخرة</h4>
                </div>
            </div>


        </div>
        <div class="map">
            <div class="border">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.703246675992!2d44.953228714995054!3d35.337377880286375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f51a09c6c25%3A0xa00d265d3ee22a0d!2sجمعية+الشهد+لرعاية+الايتام%E2%80%AD!5e0!3m2!1sen!2s!4v1554996975469!5m2!1sen!2s"
                    frameborder="0"
                    allowfullscreen>
                </iframe>

                <div class="address">
                    <h2>العنوان</h2>
                    <p>مقابل قيادة الموسيقات العسكرية<br>
                    شارع سمير العياصرة<br>
                    بناء رقم 4<br>
                    عمّان<br/>
                    الأردن‎</p>
                </div>

            </div>
        </div>
        <div class="time">
            <div class="border">
                <div>
                    <h2>ساعات العمل</h2>
                    <br>
                    <h3 class="h3"> السبت:	مغلق</h3>
                    <h3 class="h3">الأحد:	8:30 ص – 2:30 م</h3>
                    <h3 class="h3">الاثنين:	8:30 ص – 2:30 م</h3>
                    <h3 class="h3">الثلاثاء:	8:30 ص – 2:30 م</h3>
                    <h3 class="h3">الأربعاء:	8:30 ص – 2:30 م</h3>
                    <h3 class="h3">الخميس:	8:30 ص – 2:30 م</h3>
                    <h3 class="h3">الجمعة:	مغلق</h3>
                </div>

                <div class="phone">
                    <h2>الاتصال</h2>
                    <h3 class="phone-num"><span><img class="phone-logo" src="../assets/phone-solid.png"></span> 07 9500 0145</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

    p {
        text-align: center;
    }

    h4 {
        text-align: center;
    }
    .phone-logo {
        width: 20px;
        object-fit: cover;
    }

    .phone {
        margin-top: 50px;
    }

    .phone-num {
        text-align: center;
    }

    .container {
        display: grid;
        height: 100vh;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.5fr 4fr;
        grid-template-areas:
            "nav nav nav"
            "map images time"
        ;
    }

    h2 {
        text-align: center;
    }
    .h3 {
        text-align: right;
        margin-right: 100px;
        font-weight: 100;
    }

    nav {
        display: flex;
        justify-content: space-between;
        box-shadow: 2px 2px 20px #222;
        
        grid-area: nav;
    }

    .logo {
        width: 300px;
        height: 80px;
        object-fit: cover;
        margin-left: 90px;
    }

    .people, iframe {
        width: 360px;
        height: 360px;
        object-fit: cover;
        margin: 30px;
        border-radius: 20px;
    }

    .border {
        width: 420px;
        height: 600px;
        margin: 30px;
        border-radius: 20px;
        border: 1px black solid;
        box-shadow: 0 0 10px darkgray;
    }


    .router-link {
        max-height: 20px;
        margin-right: 50px;
        margin-top: 15px;
        display: block;
    }

    .time {
        grid-area: time;
    }

    .map {
        grid-area: map;
    }

    .images {
        grid-area: images;
    }


    @media  (max-width: 500px) {
        .container {
            grid-template-columns: 1fr;
            grid-template-rows: 0.5fr 4fr 4fr 4fr;
            grid-template-areas: 
                "nav"
                "images"
                "map"
                "time"
            ;
        }

        .router-link {
            display: none;
        }

        .logo {
            margin-right: 100px;
        }

    }
</style>