<template>
  <section class="container mt-5">


      <div class="media">
        <img class="align-self-center mr-3" :src="book.coverUri" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">{{book.title}} {{book.author}}</h5>
          <p>{{book.resume}}</p>
          <span v-if='book.ebooks' class="badge badge-info">ebooks</span>
        </div>
      </div>



  </section>
</template>

<script>
import axios from 'axios';


export default {
  name: 'BooksDetail',
  props: {


  },
  data:()=>({
      book:{}
  }),
  methods:{
      async fetchOneBook(booksId){
          let apiUri = `http://localhost:3000/books/${booksId}`
          let oneB = await axios.get(apiUri);
          if(oneB.status==200){
              console.log(this.book);
              this.book = oneB.data;
          }

      }
  },
  async created(){
      // d'abord on récupère l'id courant qui est dans l'object this.$route
      let { booksId }    = this.$route.params;
      console.log(booksId);
      await this.fetchOneBook(booksId);


  }
}
</script>

<style scoped>

</style>
