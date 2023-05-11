import moment from "moment/moment";
const calculateSumOfNumbers = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

export {
    calculateSumOfNumbers,
    getFormattedTime,
}