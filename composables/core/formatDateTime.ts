export const formatDateTime = (date) => {
    // Check if date is a string and convert it to a Date object
    if (typeof date === 'string') {
      date = new Date(date)
    }

    // Check if date is a valid Date object
    if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    } else {
      return 'Invalid Date'
    }
  }