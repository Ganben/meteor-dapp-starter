const state = () => ({
    address: null,
    count: 0
})

//getters

const getters = {
    isConnect: (state, getters) => {
        if (state.address != null) {
            return true
        } else {
            state.count ++
            return false
        }
    },
    getAddress: (state, getters) => {
        return state.address
    },
    getCount: (state, getters) => {
        return state.count
    }
}

//actions
const actions = {
connectMetamask({commit, state}, fetchedAddress) {
    console.log('called cmm');
    commit('setAddress', fetchedAddress);
},
lostConnect({commit, state}) {
    commit('setAddress', null);
},
setCountNumber({commit, state}, cNumber) {
    commit('setCount', cNumber);
}
}

//mutations
const mutations = {
setAddress: (state, {addr}) => {
    state.address = addr
},
setCount: (state, {c}) => {
    state.count += c
}
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}