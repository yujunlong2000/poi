import 'eventsource-polyfill'
import hotClient from 'webpack-hot-middleware/client?reload=true'
import Vue from 'vue'

Vue.config.productionTip = false

hotClient.subscribe(event => {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
