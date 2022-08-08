import '@styles/globals.css'

import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//   gtmId: 'GTM-5CWTVQ2'
// }

function App ({ Component, pageProps }){
  useEffect(() => {
    TagManager.initialize({gtmId: "GTM-5CWTVQ2"});
  }, []);
  return <Component {...pageProps} />
}

export default App