export const required = (input) => {
    return `${input} is required.`;
};

export const tooShort = (input) => {
    return `${input} is too short.`;
};

export const tooLong = (input) => {
    return `${input} is too long.`;
};

export const badEmail = () => {
    return `Please enter a valid email.`;
};
