import Vue from 'vue';
import moment from 'moment'
import 'animate.css';
Vue.prototype.$eventBus = new Vue();
Vue.mixin({
    methods: {
        uuid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
                c
            ) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        },
        goBack() {
            history.back()
        },
        async callApi(method, url, data){
          try{
            return await this.$axios({
              method,
              url,
              data
            })
            
          }catch(e){
            console.error(e)
          }
        }

    },
    filters: {
        capitalize(value) {
            if (!value) return "";
            value.toString().toLowerCase();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        formatDate(dateString) {
            // return moment(dateString).fromNow();
            if (moment(dateString).isValid()) {
                return moment(dateString).format('ddd, Do MMM YYYY')
            }
        },
        formatTime(timeString) {
            // return moment(dateString).fromNow();
            if (moment(timeString).isValid()) {
                return moment(timeString).format('LT')
            }
        },
        asNumber(input) {
            return new Intl.NumberFormat().format(input)
        },
        asCurrency(input) {
            let formatter = new Intl.NumberFormat('en-UK',
                {
                    style: 'currency',
                    currency: 'NGN',
                    maximumFractionDigits: 2,
                    maximumSignificantDigits: 4
                });
            return formatter.format(input)
        }
    }
})
