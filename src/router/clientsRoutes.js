
export const clientsRoutes = [
    {
        path: '/', name:'home',
        component: () => import('../components/BooksList.vue')
    },
    {
        path: '/books', name:'books',
        component: () => import('../components/BooksList.vue')
    },
    {
        path: '/books/:booksId', name:'booksDetail',
        component: () => import('../components/BooksDetail.vue')
    },
    {
        path: '/genres', name:'genres',
        component: () => import('../components/GenresList.vue')
    },
    {
      path: '/admin', name:'admin',
      component: () => import('../components/BooksAdmin.vue'),
      meta: {
            authorize: ['Admin']
        }
    },
    {
       path: '/admin/books', name:'adminBooksList',
       component: () => import('../components/AdminBooksList.vue'),
        meta: {
              authorize: ['Admin']
          }
    },
    {
        path: '/admin/books/:booksId', name:'adminBooksEditAndCreate',
        component: () => import('../components/AdminBooksEditAndCreate.vue'),
        meta: {
               authorize: ['Admin']
        }
    }
] // end clientsRoutes
