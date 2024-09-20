import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';


export default defineNuxtPlugin((nuxtApp) => {

      nuxtApp.vueApp.use(TawkMessengerVue, {

                      propertyId : '66ebc6644cbc4814f7daeca0',

                      widgetId : '1i84ftu7k'

     });

});