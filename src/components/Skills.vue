<template>
  <div id="skills">
    <section class="section">
    <div style="width:100%;">
      <div class="has-text-centered">
        <span style="margin-bottom:30px" class="underline heading is-size-2 w300">Skills</span>
        <table style="margin:auto;">
          <tbody>
            <tr v-for="cat in skills" :key="cat.id">
              <td style="" class="has-text-right">{{ cat.category }}</td>
              <td style="">
                <div class="tags">
                  <span class="bold-tag" v-for="item in cat.items" :key="item" v-bind:class="getLevelColor(item.level)">{{ item.name }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>        
    </div>   
  </section>
  </div>
</template>

<script>

import skills_data from '../data/skills.json';
export default {
  data() {
    return {
      skills:skills_data
    }
  },
  methods:{
    getLevelColor(level){
      if(level == '3') return 'tag is-light-blue-green'      
      if(level == '2') return 'tag is-light-dark'
      if(level == '1') return 'tag is-lighter-dark'
    }
  }
}
</script>

<style scoped>

tr {
  border-top: 1px solid rgb(226, 226, 226);
}

table tr:first-child {
  border: 0;
}

td {
  padding: 5px;
}

</style>
