<template>
  <div class="info-card">
    <div
      class="info-card-header"
      :style="headerStyle"
    >
      <img
        class="info-avatar"
        :src="avatar"
        :alt="nickname"
      >
    </div>

    <div class="info-card-body">
      <section class="info-nickname">
        {{ nickname }}
      </section>

      <!-- eslint-disable vue/no-v-html -->
      <section
        v-if="description"
        class="info-desc"
        v-html="description"
      />
      <!-- eslint-enable vue/no-v-html -->

      <section class="info-contact">
        <section v-if="location">
          <IconInfo
            class="info-location"
            type="location"
            :title="location"
          >
            {{ location }}
          </IconInfo>
        </section>

        <section v-if="organization">
          <IconInfo
            class="info-organization"
            type="organization"
            :title="organization"
          >
            {{ organization }}
          </IconInfo>
        </section>
        <section v-if="organization2">
          <IconInfo
            class="info-organization2"
            type="organization"
            :title="organization2"
          >
            {{ organization2 }}
          </IconInfo>
        </section>

        <section v-if="email">
          <IconInfo
            class="info-email"
            type="email"
            :href="`mailto:${email}`"
            :title="email"
          >
            {{ email }}
          </IconInfo>
        </section>
      </section>
    </div>
    <section
      class="post-links"
      style="padding:1em; border-bottom:1px solid #eaecef;"
    >
      <RouterLink
        v-if="prevPost"
        :to="prevPost.path"
        class="post-link"
      >
        {{ `${$themeConfig.lang.prevPost} : ${prevPost.title}` }}
      </RouterLink>
      <div style="padding-bottom:1em;" />
      <RouterLink
        v-if="nextPost"
        :to="nextPost.path"
        class="post-link"
      >
        {{ `${$themeConfig.lang.nextPost} : ${nextPost.title}` }}
      </RouterLink>
    </section>
    <div
      v-if="sns"
      class="info-card-footer"
    >
      <section class="info-sns clearfix">
        <a
          v-for="(item, name) of sns"
          :key="name"
          :href="item.link"
          class="sns-link"
          target="_blank"
        >
          <IconSns
            :name="name"
            :account="item.account"
            size="1.5em"
          />
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import GeoPattern from 'geopattern'
import IconInfo from '@theme/components/IconInfo.vue'
import IconSns from '@theme/components/IconSns.vue'

export default {
  name: 'InfoCard',

  components: {
    IconInfo,
    IconSns,
  },

  computed: {
    thisIndex () {
      return this.$posts.indexOf(this.$page)
    },

    prevPost () {
      const nextIndex = this.thisIndex + 1
      return nextIndex > this.$posts.length - 1 ? null : this.$posts[nextIndex]
    },

    nextPost () {
      const prevIndex = this.thisIndex - 1
      return prevIndex < 0 ? null : this.$posts[prevIndex]
    },
    info () {
      return this.$themeConfig.personalInfo || {}
    },

    nickname () {
      return this.info.nickname || 'Unknown'
    },

    description () {
      return this.info.description || null
    },

    location () {
      return this.info.location || null
    },

    email () {
      return this.info.email || null
    },

    organization () {
      return this.info.organization || null
    },
    organization2 () {
      return this.info.organization2 || null
    },
    avatar () {
      return this.info.avatar || '/assets/img/avatar_unknown.jpg'
    },

    sns () {
      return this.info.sns || null
    },

    headerBackgroundConfig () {
      return this.$themeConfig.infoCard.headerBackground || {}
    },

    headerBackgroundImg () {
      return this.headerBackgroundConfig.url || null
    },

    headerStyle () {
      if (this.headerBackgroundImg) {
        return {
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-attachment': 'scroll',
          'background-image': `url(${this.headerBackgroundImg})`,
        }
      }

      if (!this.$ssrContext && this.headerBackgroundConfig.useGeo !== false) {
        return {
          'background-image': this.gpImg(),
        }
      }

      return {}
    },
  },

  methods: {
    gpImg () {
      return GeoPattern.generate(this.nickname, { color: '#eee' }).toDataUrl()
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

$headerBgHeight = 150px
$avatarHeight = 120px

.post-meta
  .post-date
    color lighten($grayTextColor, 50%)
    margin-bottom 1rem
    .create-date
      float left
    .update-date
      float right
  .post-links
    .post-link
      display block
      line-height 1.7
      color lighten($grayTextColor, 20%)
      font-weight normal
      transition all 0.2s
      &:hover
        color $accentColor
.info-card
  padding 0
  a
    color $grayTextColor
    font-weight normal
  .info-card-header
    height $headerBgHeight
    margin-bottom $avatarHeight * 0.5
    border-top-left-radius 5px
    border-top-right-radius 5px
    .info-avatar
      display block
      width $avatarHeight
      height $avatarHeight
      margin 0 auto
      border 3px solid #fff
      border-radius 50%
      box-shadow: 0 0 2px alpha(black, 0.2)
      transform translateY($headerBgHeight - $avatarHeight * 0.5)
  .info-card-body
    cursor default
    padding 1rem
    border-bottom 1px solid $borderColor
    text-align center
    .info-nickname
      display block
      font-size 1.5rem
      font-weight bold
      text-align center
    .info-desc
      margin 1rem 0
    .info-contact
      color $grayTextColor
      word-break break-all
      line-height 160%
      .icon
        fill $grayTextColor
  .info-card-footer
    text-align center
    padding 1rem

</style>
