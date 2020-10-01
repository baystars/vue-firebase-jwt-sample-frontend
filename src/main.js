// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDW8Ckho34AxCH58yglnx3K9Jaak9xsTlg',
  authDomain: 'project-9067647457.firebaseapp.com',
  databaseURL: 'project-9067647457.firebaseio.com',
  projectId: 'buta7-96529',
  storageBucket: 'YOUR_BUCKET_ID.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID'
}

let app

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
