import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import axios from 'axios';

const useAxios = (url, options = {}) => {
    const [response, setResponse] = useState([]);

    const setData = async (e) => {
        if ('string' === typeof (e)) {
            url = url + e
        }
        try {
            const res = await axios.get(url);
            setResponse(data => [...response, { ...res.data, id: uuid }])
        } catch (error) {
            console.log(error)
        }
    }
    return [response, setData];
}
export default useAxios;