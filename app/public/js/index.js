const Offer = {
    data() {
      return {
        "person": {}
        }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY');
        }
    },
    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then((parsedJson) => {
                this.person = parsedJson.results[0]
            })
            .catch( err => {
                console.error(err)
            })
        }
    },
    created() {
        this.fetchUserData();
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');