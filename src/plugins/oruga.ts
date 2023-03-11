import Oruga from '@oruga-ui/oruga-next'
// import '@oruga-ui/oruga-next/dist/oruga.css'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import { library } from "@fortawesome/fontawesome-svg-core";
    // internal icons
    import {
        faCheck,
        faCheckCircle,
        faInfoCircle,
        faExclamationTriangle,
        faExclamationCircle,
        faArrowUp,
        faAngleRight,
        faAngleLeft,
        faAngleDown,
        faCalendar,
        faAnglesLeft,
        faAnglesRight,
        faEye,
        faEyeSlash,
        faCaretDown,
        faCaretUp
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

    library.add(
        faCheck,
        faCheckCircle,
        faInfoCircle,
        faExclamationTriangle,
        faExclamationCircle,
        faArrowUp,
        faAngleRight,
        faAngleLeft,
        faAngleDown,
        faCalendar,
        faAnglesLeft,
        faAnglesRight,
        faEye,
        faEyeSlash,
        faCaretDown,
        faCaretUp
    );

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component("vue-fontawesome", FontAwesomeIcon)
    .use(Oruga, {
      iconComponent: "vue-fontawesome",
      iconPack: "fas"
    })
})
