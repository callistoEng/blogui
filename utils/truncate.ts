import { formatDistance } from "date-fns";
export const truncateWords = (str: string, length: number, ending?: string) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + " " + ending;
  } else {
    return str;
  }
};

export const NumberFormat = (val: string | number | null | undefined) => {
  if (val) {
    let newVal = +val;
    // remove sign if negative
    if (newVal == 0) {
      return null;
    }
    var sign = 1;
    if (newVal < 0) {
      sign = -1;
      newVal = -newVal;
    }
    // trim the number decimal point if it exists
    let num = newVal.toString().includes(".")
      ? newVal.toString().split(".")[0]
      : newVal.toString();
    let len = num.toString().length;
    let result = "";
    let count = 1;

    for (let i = len - 1; i >= 0; i--) {
      result = num.toString()[i] + result;
      if (count % 3 === 0 && count !== 0 && i !== 0) {
        result = "," + result;
      }
      count++;
    }
    // return result with - sign if negative
    return sign < 0 ? "-" + result : result;
  }
  return null;
};
export const NumberFormatAcres = (val: string | number | null | undefined) => {
  if (val) {
    let newVal = +val;
    if (newVal == 0) {
      return null;
    }
    // remove sign if negative
    var sign = 1;
    if (newVal < 0) {
      sign = -1;
      newVal = -newVal;
    }
    // trim the number decimal point if it exists
    let num = newVal.toString().includes(".")
      ? newVal.toString().split(".")[0]
      : newVal.toString();
    let len = num.toString().length;
    let result = "";
    let count = 1;

    for (let i = len - 1; i >= 0; i--) {
      result = num.toString()[i] + result;
      if (count % 3 === 0 && count !== 0 && i !== 0) {
        result = "," + result;
      }
      count++;
    }

    // add number after decimal point
    if (+val.toString().includes(".")) {
      result = result + "." + +val.toString().split(".")[1];
    }
    // return result with - sign if negative
    return sign < 0 ? "-" + result : result;
  }
  return null;
};

export const ecFormatTime = (time: Date) => {
  const formatedTime = formatDistance(new Date(time), new Date(), {
    addSuffix: true,
  });
  return formatedTime;
};
// export const NumberFormat = (number) => {
//   if(number){
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
//   return null
// };
