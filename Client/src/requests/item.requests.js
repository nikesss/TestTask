import axios from "axios";
import packageJson from '../../package.json';

export const allItem = async () => {
    let items = [];
    await axios.get(`${packageJson.server}/api/Item/getAll`).then(
        res => items = res.data
    )
    return items;
}

export const addItem = async (itemText, status) => {
    await axios.post(`${packageJson.server}/api/Item/addItem`, {itemText, status});
}

export const updateItem = async (id, itemText, status) => {
    await axios.post(`${packageJson.server}/api/Item/updateItem`, {id, itemText, status});
}

export const deleteItem = async (id) => {
    await axios.get(`${packageJson.server}/api/Item/deleteItem?id=${id}`);
}
