
new Vue({
    el: '#app',
    data: {
      username: '',
      email: '',
      twitter: '',
      codepen: ''
    },
  
    mounted () {
  
      this.username = (Cookies.get('username') !== 'undefined') && Cookies.get('username')
      this.email = (Cookies.get('email') !== 'undefined') && Cookies.get('email')
        
    },
    methods: {
  
      Save () {
        Cookies.set('username', this.username, { expires: 2 })
        Cookies.set('email', this.email, { expires: 2 })
        
      },
  
      Clear () {
        Cookies.remove('username')
        Cookies.remove('email')        
        this.username = ''
        this.email = ''
        this.twitter = ''
        this.codepen = ''
      }
  
    }
  })
  