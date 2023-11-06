const baseURL = 'http://localhost:7003/api/docs'

const register = '/register'
const auth = '/auth'




const urls = {
    auth:{
        users:'/users',
        register:`/users`,
        login:auth,
        me:`${auth}/me`,
        refresh:`${auth}/refresh`
    }
}


export {
    baseURL,
    urls
}