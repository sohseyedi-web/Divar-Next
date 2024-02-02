import { toPersianNumbers } from "./toPersianNumber";

export default function timeDifference(inputDate) {
  const inputDateTime = new Date(inputDate);
  const currentDate = new Date();
  const timeDiff = currentDate - inputDateTime;
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const weeksDiff = Math.floor(daysDiff / 7);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(daysDiff / 365);

  let result;

  switch (true) {
    case secondsDiff < 60:
      result = `${toPersianNumbers(secondsDiff)} ثانیه قبل`;
      break;
    case minutesDiff < 60:
      result = `${toPersianNumbers(minutesDiff)} دقیقه قبل`;
      break;
    case hoursDiff < 24:
      result = `${toPersianNumbers(hoursDiff)} ساعت قبل`;
      break;

    case daysDiff < 7:
      result = `${toPersianNumbers(daysDiff)} روز قبل`;
      break;
    case weeksDiff < 4:
      result = `${toPersianNumbers(weeksDiff)} هفته قبل`;
      break;
    case monthsDiff < 12:
      result = `${toPersianNumbers(monthsDiff)} ماه قبل`;
      break;
    default:
      result = `${toPersianNumbers(yearsDiff)} سال قبل`;
      break;
  }

  return result;
}
