import {createSelector} from "reselect";

export const getUser = (state) => {
    return state.userPage.users
}
export const getSuperUser = createSelector(getUser, (user) =>{
    return user.filter(u => true)
})
export const getPageSize = (state) => {
    return state.userPage.pageSize
}
export const getTotalElement = (state) => {
    return state.userPage.totalElements
}
export const getCurrentPage = (state) => {
    return state.userPage.currentPage
}
export const getIsFetching = (state) => {
    return state.userPage.isFetching
}