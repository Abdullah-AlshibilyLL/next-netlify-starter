import '@styles/globals.css'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-5CWTVQ2'
}



function Application({ Component, pageProps }) {
  TagManager.initialize(tagManagerArgs)
  return <Component {...pageProps} />
}

export default Application
