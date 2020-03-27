import { createEmptyArray } from '@core/utils';

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};

const generateRandomIp = (intGenerator) => {
  return `${intGenerator(0, 255)}.${intGenerator(0, 255)}.${intGenerator(0, 255)}.${intGenerator(0, 255)}`;
}

const generateUsers = (num) => {
  return createEmptyArray(num)
    .map((element, index) => {
      return index + 1;
    })
    .map((element) => {
      return {
        id: element,
        name: `Mock User ${element}`,
        ip: generateRandomIp(generateRandomInt),
        actions: generateRandomInt(0, 1000),
        isEven: (element % 2 === 0).toString() 
      };
    });
}

export const USERS_MOCK_DATA = generateUsers(40);