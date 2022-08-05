import { RepositoryInterface } from "../repository.interface"

import { DriverInterface } from '../interfaces/driver.interface';
import api from "../../pages/api";



export default function DriverRepository(): DriverInterface {

    const list = () => api.get('/drivers').then(response => response.data.data)


    return { list }
}