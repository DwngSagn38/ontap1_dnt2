import { addSach } from "./reducer";


const URL = 'http://10.24.56.124:3000/Sach'

export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await fetch(URL);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addSach(item))
            });
        } catch (error) {
            console.log(error)
        }
    }
}