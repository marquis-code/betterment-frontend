// composables/useDateFormatter.js
export const formatDate = (dateString, locale = 'en-US', options = {}) => {
    if (!dateString) return '';
  
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    // Merge custom options with default options
    const formatOptions = { ...defaultOptions, ...options };
  
    // Parse the date string and format it
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  };
  