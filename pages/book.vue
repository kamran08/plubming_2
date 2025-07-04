


<template>
    <div>
    <!-- Navbar -->
    <Menu></Menu>
    <!-- Navbar -->

    <!-- Single Service -->
    <div class="_2content">
        <!-- Top banner -->
        <header class="blog-banner">
            <div class="container blog-banner_con _text_center">
                <h4><a href="index.html"> Home </a> / Appointment </h4>
                <h3>Book a Appointmen</h3>
            </div>
        </header>
        <!-- Top banner -->

        <!-- Main Section -->
        <div class="_blog_con">
            <div class="container">
                <div class="_book">
                    <h1 class="_book_title">Book a Appointment</h1>

                    <div class="_book_form">
                        <div class="row g-4">
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1input_group">
                                    <input class="_1input" placeholder="Full Name">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1input_group">
                                    <input class="_1input" placeholder="Email Address">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1input_group">
                                    <input class="_1input" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_1input_group">
                                    <input class="_1input" placeholder="Zip Code">
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1input_group">
                                    <select class="_1select">
                                        <option disabled>Select Service</option>
                                        <option>Select Service</option>
                                        <option>Select Service</option>
                                        <option>Select Service</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1input_group">
                                    <textarea class="_1textarea" placeholder="Write here message" rows="8"></textarea>
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="_1input_button _text_center">
                                    <button  class="_1btn _btn_large">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Single Service -->

    <!-- Footer -->
    <Footer></Footer>
    <!-- Footer -->
    </div>
</template>


<script>
import Menu from "~/components/menu.vue";
import Footer from "~/components/footer.vue";
// import carousel from './vue-owl-carousel2';
// import carousel from 'vue-owl-carousel'

export default {
      data(){
        return{
        }
    },

components: {
  Menu,
  Footer,
},



methods:{
},

async created(){

}
}
</script>