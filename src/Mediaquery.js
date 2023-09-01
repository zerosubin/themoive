import {useMediaQuery} from 'react-responsive'

export const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({query: '(min-width: 1200px)'})
  return isDesktop ? children : null
}

export const Tablet = ({children}) => {
  const isTablet = useMediaQuery({query: '(max-width: 1199px) and (min-width: 855px)'})
  return isTablet ? children : null
}

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({query: '(max-width: 854px)'})
  return isMobile ? children : null
}