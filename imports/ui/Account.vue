<template>
    <div>
        <a v-if="isConnect"> Metamask Connect: {{ address }} </a>
        <button v-on:click="updateAddress">Update</button>
        <a> 123={{count}} </a>
        <a> {{address}} </a>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            temp1: ""
        }
    },
    computed: {
      ...mapState('account', {
        // isConnect: state => state.isConnect,
        // isNot: state => !state.isConnect,
        // address: state => state.getAddress,
        count: state => state.count
      }),
      address: {
          get () {
              return this.getAddress
          },
          set (val) {
              this.updateAddress({addr: val})
          }
      },
      ...mapGetters('account', {
        //   isConnect: 'isConnect',
        isConnect: 'isConnect',
        getAddress: 'getAddress'
      })
    },
    methods: {
        ...mapActions('account',
        {
            setCount: 'setCountNumber',
            setAddress: 'setAddress'
        
        }),
        updateAddress() {
            // this.address = {addr: this.getAddress};
            this.temp1 = this.getAddress;
            console.log('update exe 999')
            this.setCount({c: 999});
        },
        created() {
    
        }
    }
}
</script>