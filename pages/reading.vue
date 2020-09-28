<template>
  <div>
    <h1>Recommended Reading</h1>
    <div v-for="item in readingList" :key="item.title">
      
      <a :href="item.actions[0].href">{{item.title}}</a>
      {{item.author}}
    </div>
  </div>
</template>
<script>
export default {
  head: { title: "Jeff Gaskill, Reading" },
  data () {
    return {
      readingList: [{
        title: 'Maker\'s Schedule, Manager\'s Schedule',
        author: 'Paul Graham',
        description: 'Essential reading for every manager and any engineer who has too many meetings.',
        actions: [{
          label: 'Read',
          href: 'http://www.paulgraham.com/makersschedule.html'
        }]
      }, {
        title: 'How to Make OKRs Measurable',
        author: 'Stacey Barr',
        description: '',
        actions: [{
          label: 'Read',
          href: 'https://www.staceybarr.com/measure-up/how-to-make-okrs-measurable/'
        }]
      }, {
        title: 'The Pragmatic Programmer',
        author: 'David Thomas, Andrew Hunt',
        description: '',
        actions: [{
          label: 'Buy',
          href: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/'
        }]
      }]
    }
  }
};
</script>