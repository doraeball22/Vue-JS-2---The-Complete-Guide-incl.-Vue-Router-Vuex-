import Home from './components/Home.vue'
import Header from './components/Header.vue'

// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

// webpack chunk for lazy load route
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user') // the 'user' parameter is group of user bundle 
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}
// This is none group bundle
// const User = resolve => {
//     require.ensure(['./components/user/User.vue'], () => {
//         resolve(require('./components/user/User.vue'))
//     }) 
// }

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