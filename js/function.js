/**
 * Функция для проверки длины строки.
 * Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
 * если строка меньше или равна указанной длине, и false, если строка длиннее.
 */
function checkString(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(string) {
  string = string.toLowerCase();

  let startIndex = 0;
  let endIndex = string.length - 1;

  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) {
      return false;
    }
    startIndex += 1;
    endIndex -= 1;
  }

  return true;
}

// Функция, которая принимает строку,
// извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:

function extractNumber(string) {
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    if ('0' <= string[i] && string[i] <= '9') {
      newString += string[i];
    }
  }

  if (newString === '') {
    return NaN;
  }

  return Number(newString);
}

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами —
// и возвращает исходную строку, дополненную указанными символами до заданной длины.
// Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
// Если «добивка» слишком длинная, она обрезается с конца.

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
