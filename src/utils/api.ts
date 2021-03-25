import axios from "axios";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWQxYTc5NzYtZjc0Mi00ZjQ3LTg2NDYtMmUyOWRiYTcxNDk3IiwidXNlcm5hbWUiOiJyYWZhZWwiLCJleHAiOjE2MTkyMDk2OTMsImVtYWlsIjpudWxsfQ.QC6JH_7Yc6MSa4c2ejFdYerzARXHU9_TfTdNvGjir_U"
const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `JWT ${token}` 
    }
});

export default api
