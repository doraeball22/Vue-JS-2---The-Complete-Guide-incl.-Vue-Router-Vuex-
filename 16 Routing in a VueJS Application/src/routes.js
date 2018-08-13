import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export const routes = [
    { path: '', 
        // component เติม 's' ด้วย ถ้าต้องการเพิ่ม router-view แบบมี name
        components: { default: Home, 'header-top': Header }, 
        name: 'home' 
    },
    { path: '/user', 
        // component เติม 's' ด้วย ถ้าต้องการเพิ่ม router-view แบบมี name
        components: { default: User, 'header-bottom': Header }, 
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route setup');
                next()
            } },
            { path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
    // also the same redirect with route name: {name: 'home'}
    { path: '/redirect-me', redirect: '/user' },
    { path: '*', redirect: '/' }

    // { path: '', component: Home, name: 'home' },
    // { path: '/user', component: User, children: [
    //     { path: '', component: UserStart },
    //     { path: ':id', component: UserDetail },
    //     // { path: ':id/edit', component: UserEdit }
    //     { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    // ]}
]