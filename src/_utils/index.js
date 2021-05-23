export const getUrlParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
};

export const toCamelCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};