/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */
import axios from 'axios';
export async function postCall(url, payload, authorization) {
    if (payload.body)
        payload.body = JSON.stringify(payload.body);
    const config = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${authorization}`,
        },
    };
    try {
        const response = await axios.post(url, payload, config);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
        else {
            console.error(response.data);
        }
    }
    catch (error) {
        console.error(error);
    }
    return;
}
export async function getCall(url, authorization) {
    const config = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${authorization}`,
        },
    };
    try {
        const response = await axios.get(url, config);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
        else {
            console.error(response.data);
        }
    }
    catch (error) {
        console.error(error);
    }
    return;
}
export function generateQueryString(params) {
    const queryString = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    return queryString;
}
