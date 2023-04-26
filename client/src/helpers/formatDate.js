const formatDate = function(date) {
    const [hours, minutes] = [
        date.getHours().toString(),
        date.getMinutes().toString()
    ].map(value => value.length === 1 ? "0" + value : value);
    return `${hours}:${minutes}`;
}

export default formatDate;