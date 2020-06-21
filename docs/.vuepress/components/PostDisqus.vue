<template>
  <div id="disqus_thread" />
</template>
<script>
export default {
  name: 'PostDisqus',
  mounted () {
    (function () { // DON'T EDIT BELOW THIS LINE
      var d = document; var s = d.createElement('script')
      s.src = 'https://blog-akarinext-org.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s)
    })()
  },
}
</script>
