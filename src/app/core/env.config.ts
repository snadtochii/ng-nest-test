const isDev = window.location.port.indexOf('4200') > -1;

const getHost = () => {
    const protocol = window.location.protocol;
    const host = window.location.host;

    return `${protocol}//${host}`;
};

const apiURI = isDev ? 'http://localhost:4200/api/v0/' : '/api/v0/';

export const ENV = {
    BASE_URI: getHost(),
    BASE_API: apiURI
};
