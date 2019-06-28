<template>
    <div class="main-wrapper">
        <div class="form">
            <label for="">defi</label>
            <input type="text" v-model="intitule">
            <label for="">à qui</label>
            <input type="text" v-model="to">
            <button @click="addDefi">Envoyer</button>
        </div>
    </div>
</template>

<script>
import DefisDB from '@/firebase/defis-db'
export default {
    data() {
        return {
            intitule:'',
            to:''
        }
    },
    methods: {
        addDefi() {
            console.log(this.intitule,this.to)
            const defiDb = new DefisDB()
            const defi = {
                intitule: this.intitule,
                to: this.to
            }

            defiDb.create(defi)
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    input {
        height: 40px;
        border: black solid 2px;
        width: 100%;
    }
    button {
        height: 40px;
        color: white;
        background: black;
        width: 100%;
        display: block;
    }
}
</style>
