export const getDateFormatted = (dateObj) => {
    const monthNames = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
    ];

    let date = new Date(dateObj);
    let day = date.getDate();
    let month = monthNames[date.getMonth()];

    let currentDay = new Date().getDate();
    let different = currentDay - day;

    let msg = '';

    if (different === 0) {
        msg = 'Сегодня,';
    } else if (different === 1) {
        msg = 'Вчера,';
    } else if (different === 2) {
        msg = 'Позавчера,';
    }

    return `${msg} ${day} ${month}`;
};
