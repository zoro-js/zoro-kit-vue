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
    const tagName = 'h' + this.level
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W/g, '-')
      .replace(/(^-|-$)/g, '')
    return h(
      tagName,
      {
        attrs: {
          id: headingId
        },
        class: ['container-fluid', 'm-a-1']
      },
      [
        (
        <a
          name={headingId}
          href={'#' + headingId}>
          {this.$slots.default}
        </a>
        )
      ]
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
