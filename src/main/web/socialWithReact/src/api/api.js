import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const userAPI = {

    getUserById(userId) {
        return instance.get(`user/${userId}`)
    },
    follow(userId) {
        return instance.post(`user/follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`user/follow/${userId}`)
    },
    login(logAndPass) {
        return instance.post('api/v1/auth/login', logAndPass)
    }
}