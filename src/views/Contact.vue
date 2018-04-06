
<style lang="sass" scoped>
  @import '../assets/sass/_helpers/_index.sass'
  @import '../assets/sass/_theme/_colors.sass'
  .content

</style>
<template>
    <section class="content bg-secondary text-light text-center">
      <bg-wave position="top"/>
      <b-container class="has--full-height mb-5">
        <!-- TITLE -->
        <h1 class="main-title">Contact Me</h1>
        <p>Did you like it? Just send me a message. I'll answer you very soon</p>
        <b-btn size="" variant="primary" href="http://t.me/jimmy_bastos" target="_blank">Message Me</b-btn>
      </b-container>
      <bg-wave position="bottom"/>
    </section>
</template>

<script>
import bgWave from '../components/Wave.vue'
export default {
  name: 'contact',
  components: {
    bgWave
  },
  data () {
    return {

    }
  }
}
</script>
