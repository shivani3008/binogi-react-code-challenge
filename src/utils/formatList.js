export const formatList = (list, separator = ',', maxRecordsToShow = 3) =>
  `${list.slice(0, maxRecordsToShow).join(`${separator} `)}${list.length > maxRecordsToShow ? '...' : ''}`;
