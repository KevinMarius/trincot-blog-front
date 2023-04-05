import React from 'react';
export const login = async (response) => {

    if (response) {
        const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
        localStorage.setItem('userLogged', JSON.stringify({userData: response, expiration: tokenExpirationDate.toISOString()}));
    }

    return response;
};

export const isAuthenticated = () => {
    const user = localStorage.getItem('userLogged');
    if (!user) {
        return {}
    }
    return JSON.parse(user);
};
