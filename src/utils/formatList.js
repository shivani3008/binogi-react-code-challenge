export const formatList = (list, maxRecordsToShow, separator = ',') =>
  `${list.slice(0, maxRecordsToShow).join(`${separator} `)}${
    maxRecordsToShow && list.length > maxRecordsToShow ? '...' : ''
  }`;
