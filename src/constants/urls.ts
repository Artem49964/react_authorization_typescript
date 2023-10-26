const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const register = '/register'
const auth = '/auth'




const urls = {
    auth:{
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