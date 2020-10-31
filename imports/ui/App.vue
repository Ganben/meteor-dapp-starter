<template>
<div class="flex items-center justify-center align-middle">
    <button v-on:click="connectMetamask">Connect</button>
    <a>{{namedAddr}} </a>
    <div class="bg-purple text-while sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ...">
    Tailwind CSS test
    </div>
    
    <Account/>
</div>
</template>
<script>
import MetamaskOnboarding from "@metamask/onboarding";
import {mapState, mapActions} from 'vuex';
import Account from './Account.vue';


const { ethereum } = window; 

export default {
    components: {
        Account
    },
    data () {
        return {
            namedAddr: ''
        };
    },
    methods: {
        ...mapActions('account', {
            setAddr: 'connectMetamask'
        }),
        async connectMetamask() {
            try {
                const newAccouts = await ethereum.request({method: 'eth_requestAccounts'});
                this.setAddr({addr: newAccouts[0]});
                this.namedAddr = newAccouts[0];
                console.log('xxxxx set addr', newAccouts);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>