function Request() {
    const req = axios.create({
        baseURL: 'http://localhost/MVC/MVCFINALTERM/',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken")}
    })
    return req;
}
export {Request}