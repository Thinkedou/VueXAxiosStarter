<template>
  <section class="container-fluid mt-5">
    <div class='row'>
        <div class='col'>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Auteur</th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="book in allBooks" :key="book.id">
                  <th scope="row">{{book.id}}</th>
                  <td>{{book.title}}</td>
                  <td>{{book.author}}</td>

                  <td><button type="button" class="btn btn-secondary btn-sm" @click='goToBookEdit(book.id)'>Editer</button></td>
                  <td><button type="button" class="btn btn-danger btn-sm" @click='deleteThisBook(book.id)'>Supprimer</button></td>
                </tr>

              </tbody>
            </table>
        </div>

    </div>



  </section>
</template>

<script>


import axios from 'axios';


export default {
  name: 'AdminBooksList',
  components: {},
  data:()=>({
        allBooks:[]
    }),
  methods:{
      async fetchAllBooks(){

          let allB = await axios.get('http://localhost:3000/books');
          if(allB.status==200){
              let {data} = allB;
              this.allBooks = data;
          }

      },
      goToBookEdit(booksId){
          this.$router.push({ name:'adminBooksEditAndCreate', params:{booksId} })
      },
      deleteThisBook(booksId){
          this.$router.push({ name:'booksDetail', params:{booksId} })
      }
  },

  async created(){
      await this.fetchAllBooks()

  }

}
</script>

<style scoped>

</style>
