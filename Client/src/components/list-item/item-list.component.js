import {ItemComponent} from "../item/item.component";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {filteredItemState, filterItemState, itemState} from "../../state";
import {useEffect} from "react";
import {allItem} from "../../requests/item.requests";

export function ItemListComponent() {

    const items = useRecoilValue(filteredItemState);
    const listItem = useSetRecoilState(itemState);

    useEffect(() => {
        allItem().then(
            res => listItem(() => {
                return [...res]
            })
        );
    }, [])

    return(
        items.map((value, index) => (
            <ItemComponent key={index} value={value}/>
        ))
    )
}
