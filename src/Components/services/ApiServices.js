import * as qs from 'qs';
import axios from 'axios';

const BASE_URL = "https://odd-jade-cricket-sock.cyclic.app/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {}
});

axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.authorization = token;
    }
    return config;
});

class ApiServices {
    login(data) {
        return axiosInstance.post("/user/login", qs.stringify(data));
    }

    adminDashboard() {
        return axiosInstance.get("/dashboard");
    }

    customerAll() {
        return axiosInstance.post("/customer/all", {});
    }

    addService(data) {
        return axiosInstance.post("/service/add", data);
    }

    showservice() {
        return axiosInstance.post("/service/all");
    }

    changeservice(data) {
        return axiosInstance.post("/service/changeStatus", qs.stringify(data));
    }

    changeuser(data) {
        return axiosInstance.post("/customer/changeStatus", data);
    }

    updateservice(data) {
        return axiosInstance.post("/service/update", data);
    }

    singleservice(data) {
        return axiosInstance.post("/service/single", data);
    }

    vendorall(data) {
        return axiosInstance.post("/vendor/all",qs.stringify(data));
    }

    changevendorstatus(data) {
        return axiosInstance.post("/vendor/changeStatus",qs.stringify(data))
    }
    vendordashboard(data){
        return axiosInstance.post("/vendor/dashboard",data)
    }
    addcustomer(data){
        return axiosInstance.post("/customer/add",qs.stringify(data))
    }
    addsubservice(data){
        return axiosInstance.post('/subService/add',data)
    }
    vendorsingle(data){
        return axiosInstance.post('/vendor/single',data)
    }
    showsubservice(data){
        return axiosInstance.post('/subService/all',data)
    }
    subserviceupdate(data){
        return axiosInstance.post('/subService/update',data)
    }
    subservicesingle(data){
        return axiosInstance.post('/subService/single',data)
    }
    subservicechangestatus(data){
        return axiosInstance.post('/subService/changeStatus',qs.stringify(data))
    }
    bookingadd(data){
     return   axiosInstance.post('/booking/add',qs.stringify(data))
    }
    allbookingshow(data){
        return axiosInstance.post('/booking/all',qs.stringify(data))
    }
    bookinstatuschange(data){
        return axiosInstance.post('/booking/changeStatus',qs.stringify(data))
    }
    feedbackall(data){
        return axiosInstance.post('/feedback/all',data)
    }
    adddfeedback(data){
        return axiosInstance.post('feedback/add',qs.stringify(data))
    }
    addvendor(data){
        return axiosInstance.post('/vendor/add',data)
    }
    addcontact(data){
        return axiosInstance.post('/contact/add',data)
    }
    allcontact(data){
        return axiosInstance.post('/contact/all',data)
    }
    customersingle(data){
        return axiosInstance.post('/customer/single',data)
    }
    customerupdate(data){
        return axiosInstance.post('/customer/update',data)
    }
    vendorupdate(data){
        return axiosInstance.post('/vendor/update',data)
    }
}

export default new ApiServices();
