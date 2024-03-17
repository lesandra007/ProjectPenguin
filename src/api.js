import axios from 'axios';

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})
export const executeCode = async (sourceCode) => {
    const response = await API.post("/execute", {
        language: "java",
        version: "17.0.0",
        files: 
        [
        {
            content: sourceCode,
        },
        ],

    });
    return response.data;
}