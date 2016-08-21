<script>
const getChildrenTextContent = function (children) {
  return children.map(node => {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

export default {
  render (h) {
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W/g, '-')
      .replace(/(^-|-$)/g, '')

    return (
      <div
        id={headingId}
        class={['container-fluid', 'm-a-1']}>
        <a
          name={headingId}
          href={'#' + headingId}>
          {this.$slots.default}
        </a>
      </div>
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
