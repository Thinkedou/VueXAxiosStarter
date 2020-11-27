<template>
  <section class="container-fluid mt-5">
    <div class='row'>

        <div class='col-3'>
            <div class="card">
              <div class="card-body">
                <label for="exampleFormControlSelect1">Filtrer par genre</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option v-for="genre in allGenres" :key="genre.id" >{{genre.label}}</option>
                    </select>
              </div>
            </div>
        </div>
        <div class='col-9'>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Auteur</th>
                  <th scope="col">Année</th>
                  <th scope="col">Genre</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="book in allBooks" :key="book.id">
                  <th scope="row">{{book.id}}</th>
                  <td>{{book.title}}</td>
                  <td>{{book.author}}</td>
                  <td>{{book.year}}</td>
                  <td>{{book.genre.label}}</td>
                  <td><button type="button" class="btn btn-secondary btn-sm" @click='goToBookDetail(book.id)'>Voir</button></td>
                </tr>

              </tbody>
            </table>
        </div>

    </div>



  </section>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex';


export default {
  name: 'BooksList',
  components: {},
  data:()=>({
        allBooks:[],
        allGenres:[]
    }),
  methods:{
      ...mapActions("books",["fetchAllBooks"]),
      async retrieveAllBooks(){

        await this.fetchAllBooks();
          // on assign a la data locale : allBooks via le getter dédié
        this.allBooks = this.getBooks;

      },

      goToBookDetail(booksId){
          this.$router.push({ name:'booksDetail', params:{booksId} })
      }
  },
  computed:{
    ...mapGetters("books",["getBooks"]),
  },
  async created(){
      await this.retrieveAllBooks()

  }

}
</script>

<style scoped>

</style>
