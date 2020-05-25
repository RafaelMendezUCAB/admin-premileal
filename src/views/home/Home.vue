<template>
    <v-app>
        <div>
            <Navbar></Navbar>
        </div>
        <v-content>

        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script lang="ts">
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

// Components
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

@Component({
    components: {
      Footer,
      Navbar
    }
})
export default class Home extends Vue{
    
}
</script>

<style src="./Home.css" scoped></style>