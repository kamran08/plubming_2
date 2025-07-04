<template>
    <div>
        <nav id="navbar" class="_1nav" :class="(scrollY>150)? '_nav_fixed': ''">
      <div class="row align-items-center">
        <div class="col-6 col-md">
            <router-link class="_1nav_logo" to="/">Cleaner</router-link>
        </div>

        <div class="col-auto">
          <ul class="_1nav_list">
            <li>
                <router-link :class="$route.path == '/'? '_1nav_list_text _active':'_1nav_list_text'" to="/">Home</router-link>
            </li>
            <!-- <li>
                <router-link :class="$route.path == '/'? '_1nav_list_text _active':'_1nav_list_text'" to="/">Abouts Us</router-link>
            </li> -->
            <li>
                <router-link :class="$route.path == '/services'? '_1nav_list_text _active':'_1nav_list_text'" to="/services">Ours Services</router-link>
            </li>
            <!-- <li>
                <router-link :class="$route.path == '/'? '_1nav_list_text _active':'_1nav_list_text'" to="/">Contact Us</router-link>
            </li> -->
            <!-- <li>
                <router-link :class="$route.path == '/'? '_1nav_list_text _active':'_1nav_list_text'" to="/">Pricing</router-link>
            </li> -->
            <li>
                <router-link :class="$route.path == '/blog'? '_1nav_list_text _active':'_1nav_list_text'" to="/blog">Blog</router-link>
            </li>
          </ul>
        </div>
        <div class="col-auto">
            <router-link class="_1nav_appi" to="/book"><i class='bx bxs-calendar'></i> Appointment</router-link>
        </div>
      </div>
    </nav>
    </div>
</template>


<script>
export default {
    data(){
        return{
            scrollY: 0,
        }
    },

    methods:{
        handleScroll(){
            this.scrollY = window.scrollY
        },
    },

    computed: {
       
    },

    async created(){
        
    },
    
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>