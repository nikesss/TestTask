import {atom} from "recoil";

export const itemState = atom({
    key: 'itemState',
    default: []
})

export const filterItemState = atom({
    key: 'filterItemState',
    default: "All"
})
