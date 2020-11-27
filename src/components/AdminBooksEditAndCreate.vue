<template>
  <section class="container mt-5">

        <div class="card border-info mb-3" >
          <div class="card-header">Formulaire d'édition / Création :: {{thisBook.title}}</div>
          <div class="card-body text-info">
            <div class="form-group">
               <label >Titre</label>
               <input v-model='thisBook.title' type="email" class="form-control"  placeholder="">
            </div>
            <div class="form-group">
               <label >Auteur</label>
               <input v-model='thisBook.author' type="text" class="form-control"  placeholder="">
            </div>
            <div class="form-group">
               <label >Année</label>
               <input v-model='thisBook.year' type="text" class="form-control"  placeholder="">
            </div>
             <div class="form-group">
                <label >Genre</label>
                <select class="form-control"  v-model='thisBook.genre.label'>
                  <option v-for="genre in allGenres" :key='genre.id'>{{genre.label}}</option>
                </select>
              </div>

            <div class="form-group">
               <label >Url Couverture</label>
               <input v-model='thisBook.coverUri' type="text" class="form-control" placeholder="">
            </div>

            <div class="form-group">
            <label >Résumé</label>
            <textarea v-model='thisBook.resume' class="form-control"  rows="3"></textarea>
            </div>

            <button type="button" class="btn btn-dark" @click='updateOneBook()'>SAVE</button>
          </div>
        </div>


  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminBooksEditAndCreate',
   data:()=>({
       thisBook:{},
       allGenres:[],
       editMode:false,
   }),
  methods:{
      gotoAdminPage(routeName){
          this.$router.push({ name:routeName})
      },
      async fetchOneBook(booksId){
          let apiUri = `http://localhost:3000/books/${booksId}`
          let oneB = await axios.get(apiUri);
          if(oneB.status==200){
              this.thisBook = oneB.data;
          }

      },
      async fetchAllGenres(){

           let allG = await axios.get('http://localhost:3000/genres');
           if(allG.status==200){
               let {data} = allG;
               this.allGenres = data;
           }

       },
       async updateOneBook(){
            let apiUri = `http://localhost:3000/books/${this.thisBook.id}`
            let oneB = await axios.patch(apiUri,this.thisBook);
            console.log(oneB);


       }




  },
   async created(){
       // d'abord on récupère l'id courant qui est dans l'object this.$route
       let { booksId = false}    = this.$route.params;
       if(booksId=='new' ){
           this.editMode = false;
       }else{
            this.editMode = true;
            await this.fetchOneBook(booksId);
       }
       await this.fetchAllGenres()

   }
}
</script>

<style scoped>

</style>
