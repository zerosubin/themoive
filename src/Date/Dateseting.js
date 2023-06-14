const date = new Date()
const oneDayAgo = new Date(date.setDate(date.getDate() - 1))

const Monthseting = () => {
  const month = oneDayAgo.getMonth() + 1
  if(month < 10) {
    return '0' + month 
  } else {
    return month
  }
}

const Dateseting = () => {
  const date = oneDayAgo.getDate()
  if(date < 10) {
    return '0' + date
  } else {
    return date
  }
}

export const BoxYear = oneDayAgo.getFullYear()
export const Boxmonth = Monthseting()
export const Boxdate =   Dateseting()