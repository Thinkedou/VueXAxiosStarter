import Vue from 'vue'
import Router from 'vue-router'

import { clientsRoutes   } from './clientsRoutes';

Vue.use(Router);


export const router = new Router({
    routes: clientsRoutes

})
//avant l'execution de chaque route on va regarder si le user à les bon droits/roles

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    // return next();
    const { authorize } = to.meta;
    // const isLogged = store.getters['auth/isLogged'];
    const isLogged  = true; // ici votre business logic
    if (authorize) { // routes restricted, donc on check si jwt et rôles ok
        if (!isLogged) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/', query: { returnUrl: to.path } });
        }else{
            // const currentUser = store.getters['user/getUser'];
            // const firstRole   = currentUser.rolesRefs.name;

            const fakeRole = 'Admin';
            // const fakeRole = 'User';
            // next();
            if (!authorize.includes(fakeRole)) {
                console.error(`Role ${fakeRole} insuffisant pour cette page ${to.path}`)
                return next({ path: '/' });
            }else{
                return next();
            }
        }
    }else{ // routes ouvertes, pas de contrôle
        return next();
    }

})
