import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'f438c343-2e0e-4d82-939d-054e331035e4'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const followAPI = {
    getDataUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    getDataFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}