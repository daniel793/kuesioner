import Login from './component/Login'
import Finish from './component/Finish'
import Kuesioner from './component/Kuesioner'


export default{
    mode: 'history',

    routes: [
        {
            path: "/login",
            component: Login
        },

        {
            path: "/finish",
            component: Finish
        },
        {
            path:"/kuesioner-akademik",
            component: Kuesioner
        }
    ],
    
}