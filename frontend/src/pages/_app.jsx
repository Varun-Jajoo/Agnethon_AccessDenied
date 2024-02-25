import "@/src/styles/index.scss"
import "../styles/global.css"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
