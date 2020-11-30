// this is for global css
import '../styles.css'

export default function Application({ Component, pageProps }) {
  return <Component { ...pageProps } />
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP': //first contentful paint
      break
    case 'LCP': //largest contentful paint
      break
    case 'CLS': // cumulative layout shift
      break
    case 'FID': //first input delay
      break
    case 'TTFB': // time to first bite
      break
    case 'Next.js-hydration': //length of time for page to start and finish hydrating 
      break
    case 'Next.js-route-change-to-render': //length of time for page to start rendering after a route change
      break
    case 'Next.js-render': //length of time for page to finish rendering after a route change
      break
    default: 
      break
  }
}