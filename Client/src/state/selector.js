import {selector} from "recoil";
import {filterItemState, itemState} from "./atom";

export const filteredItemState = selector({
    key: 'filteredItemState',
    get: ({get}) => {
        const items = get(itemState);
        const filter = get(filterItemState);

        switch (filter) {
            case "Completed":
                return items.filter(item => item.status);
            case "Uncompleted":
                return items.filter(item => !item.status);
            case "All":
            default:
                return items;
        }
    }
})
