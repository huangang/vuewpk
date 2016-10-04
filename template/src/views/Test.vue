 <template>
  <h1> \{{msg}} </h1>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello ' + process.env.NODE_ENV + '!'
    }
  }
}
</script>
