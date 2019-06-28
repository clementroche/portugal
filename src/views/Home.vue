<template>
  <div class="page-wrapper">
    <div v-if="currentDefi" class="abs">
      <div>{{ currentDefi.intitule }} - {{ currentDefi.to }}</div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefisDB from '@/firebase/defis-db'

export default {
  data(){
    return {
      defis: []
    }
  },
  methods: {
    async getDefis() {
      const defisDb = new DefisDB()

      this.defis = await defisDb.readAll()
      this.defis.forEach((defi)=> {
          defi.createTimestamp = Date.parse(defi.createTimestamp)
      })
    }
  },
  computed: {
    defisByDate() {
      return this.defis.sort((a,b)=>{
        return b.createTimestamp - a.createTimestamp
      })
    },
    currentDefi() {
      return this.defisByDate[0] || null
    }
  },
  mounted() {
    this.getDefis()
    setInterval(() => {
      this.getDefis()
    }, 5000);
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}

.abs {
  position: absolute;
  top:0px;
  height: 0px;
  width:100vw;
  height: 100vh;
  display: flex;
  div {
    margin: auto;
    font-size: 5vw;
  }
}
</style>
