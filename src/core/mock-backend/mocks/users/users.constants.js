const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};

const generateRandomIp = (generator) => {
    return `${generator(0, 255)}.${generator(0, 255)}.${generator(0, 255)}.${generator(0, 255)}`;
}

const generateUsers = (num) => {
    return new Array(num)
        .fill(null)
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
