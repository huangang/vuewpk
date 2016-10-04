 <template>
  <div class="page">
    <counter></counter>
    <p>
      To get started, edit files in <code>\{{msg}}</code> and save.
    </p>
  </div>
</template>

<script>
import Counter from '../components/Counter'

export default {
  data () {
    return {
      msg: 'hi ' + process.env.NODE_ENV + '!'
    }
  },
  components: {
    Counter
  }
}
</script>
