export default {
    props: {
      animated: Boolean,
      avatar: [Boolean, Object],
      loading: Boolean,
      title: { type: Number, default: 35 },
      delay: { type: Number, default: 500 },
      rows: { type: Number, default: 3 }
    },
    watch: {
      loading(v) {
        if (v) {
          this.show = v
        } else {
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.show = v
          }, this.delay);
        }
      }
    },
    data() {
      return {
        show: this.loading
      }
    },
    methods: {
      renderAvatar(avatar) {
        if (!avatar) return null;
        let size = 'large', shape = 'circle';
        if (typeof avatar == 'object') {
          if (avatar.size) size = avatar.size
          if (avatar.shape) shape = avatar.shape
        }
        let props = {
          class: ['u-skeleton-avatar', {
            'u-skeleton-avatar-lg': size == 'large',
            'u-skeleton-avatar-sm': size == 'small',
            'u-skeleton-avatar-circle': shape == 'circle',
            'u-skeleton-avatar-square': shape == 'square',
          }]
        }
        return <div class="u-skeleton-header">
          <span {...props}></span>
        </div>
      },
      renderContent(title, rows) {
        let lines = new Array(rows).fill('')
        return (
          <div class="u-skeleton-content">
            {title > 0 ? <div class="u-skeleton-title" style={`width:${title}%`}></div> : null}
            <ul class="u-skeleton-paragraph">
              {lines.map(() => <li />)}
            </ul>
          </div>
        )
      }
    },
    render() {
      let { animated, show, title, avatar, rows } = this
  
      let props = {
        class: ['u-skeleton', {
          'u-skeleton-animated': animated
        }]
      }
      let nodeAvatar = this.renderAvatar(avatar)
      let nodeContent = this.renderContent(title, rows)
      let child = this.$slots.default
      return (
        <div {...props}>
          {child && !show ? child : [nodeAvatar, nodeContent]}
        </div>
      )
    }
  }