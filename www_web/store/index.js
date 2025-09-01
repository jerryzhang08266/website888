export const state = () => ({
    deviceSize: '', // 设备尺寸
})
export const getters = {

}
export const mutations = {
    updateDeviceSize (state, val) {
        state.deviceSize = val
    }
}
export const actions = {
    async nuxtServerInit ({ commit }, { app }) {
        const deviceSize = app.$cookiz.get('deviceSize') || ''
        commit('updateDeviceSize', deviceSize)
    }
}
