function isToday(time) {
  // const now = new Date().valueOf()

  // if (window.localStorage) {
  //   window.localStorage.setItem('jobPageWarnCloseTime', now)
  // }

  const start = new Date(new Date().toLocaleDateString()).valueOf()
  const end = start + (24 * 60 * 60 * 1000 - 1)

  if (time >= start && time <= end) {
    console.log('今天')
  } else {
    console.log('不是今天')
  }
}

isToday(1546963200000)
