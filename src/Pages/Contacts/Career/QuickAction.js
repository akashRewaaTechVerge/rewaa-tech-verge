import axios from 'axios';
import { useState } from 'react'

export const Action = () => {
    let [users,] = useState("")
    const insertUser = async (newUser, errors, callback) => {

        let headers = new Headers();
        let formData = new FormData();

        Object.keys(newUser).forEach(key => {
            formData.append(key, newUser[key])
        })

        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json')
        await axios.post("https://rewaatechverge.com/quick_api/quick_contact.php", formData, {
            headers: headers
        }).then(({ data: { status, message } }) => {
            if (status) {
                console.log("Success")
                callback(Object.keys(errors).length === 0 && status, "")
            } else {

                callback(false, message);
            }
        }).catch(error => {
            console.log(error)
        })
    };

    return { users, insertUser };
}
