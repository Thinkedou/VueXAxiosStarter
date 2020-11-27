import axios from 'axios';


const ROOT_API_ENDPOINT = 'http://localhost:3000/'


const state = {
    books      :[], // ou {}
    oneBook    :{}
};



// les getters sont synchrones et utilise un système de cache interne
// comme les computed dans les composants
const getters = {
    getBooks : state => state.books,
};

// @ les actions peuvent être async
const actions = {

    async fetchAllBooks ({ commit }) {
      try {
          let allB = await axios.get(`${ROOT_API_ENDPOINT}books`);
          if(allB.status==200){
              commit('SET_ALL_BOOKS', allB.data )
          }
          return allB;
      } catch (err) {

          console.error(err);
          return false;
      }
    }



};

const mutations = {

    SET_ALL_BOOKS(state,books){
        state.books = books;
    }

};


//
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
