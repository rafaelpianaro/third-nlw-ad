import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    // celular físico
    baseURL: 'http://192.168.0.17:3333'
    // para emulador rodar primeiro no terminal
    //  adb reverse tcp:3333 tcp:3333
})

export default api
