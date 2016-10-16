import moment from 'moment';

function compareTalkDateStrings(left, right) {
    const leftDate = moment(left, 'MMMM YYYY', 'ru').toDate();
    const rightDate = moment(right, 'MMMM YYYY', 'ru').toDate();
    return (leftDate > rightDate) - (leftDate < rightDate);
}

export function sortByDateString(talks, datePropertyPicker) {
    const talksToSort = [...talks];
    talksToSort.sort((left, right) => -compareTalkDateStrings(datePropertyPicker(left), datePropertyPicker(right)));
    return talksToSort;
}
