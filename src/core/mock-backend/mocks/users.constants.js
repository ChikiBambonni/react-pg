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
            return {
                id: index + 1,
                name: `Mock User ${index + 1}`,
                ip: generateRandomIp(generateRandomInt),
                actions: generateRandomInt(0, 1000),
                isEven: (index % 2 === 0).toString() 
            };
        });
}

export const USERS_MOCK_DATA = generateUsers(40);
