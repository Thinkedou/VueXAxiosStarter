<template>
  <section class="container mt-5">


      <ul class="list-group">

        <li  v-for="genre in allGenres" :key='genre.id' class="list-group-item">{{genre.label}}</li>

      </ul>



  </section>
</template>

<script>


import axios from 'axios';

export default {
  name: 'GenresList',
  components: {},
  data:()=>({
        allGenres:[]
    }),
  methods:{
      async fetchAllGenres(){

          let allG = await axios.get('http://localhost:3000/genres');
          if(allG.status==200){
              let {data} = allG;
              this.allGenres = data;
          }

      },
  },

  async created(){
      let allG = await axios.get('http://localhost:3000/genres');
      console.log(allG);
      // await this.fetchAllGenres()
  }

}
</script>

<style scoped>

</style>
