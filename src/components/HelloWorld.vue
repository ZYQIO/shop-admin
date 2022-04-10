<template>
  <h1 ref="title">
    {{ msg }}
  </h1>

  <p>store: {{ $store.state.count }}</p>
  <p>store: {{ store.state.count }}</p>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '@/store/index'

interface User {
  name: string,
  age: number
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    },
    abc: {
      type: Number,
      required: true
    },
    obj: {
      type: Object as PropType<User>,
      default: () => {}
    }
  },
  setup (props) {
    // props.obj.name

    const count = ref(0)
    const store = useStore()

    // store.state.count

    const foo = ref<{
      a: number,
      b: string
    } | null>(null)

    foo.value = {
      a: 1,
      b: 'hello'
    }

    const title = ref<HTMLHeadElement | null>(null)

    onMounted(() => {
      console.log(title.value)
    })

    return {
      count,
      title,
      store
    }
  }
})

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
