import { Box, Checkbox, Input, Button  } from '@chakra-ui/react';
import {useRecoilState} from "recoil";
import {itemState} from "../../state";
import {allItem, deleteItem, updateItem} from "../../requests/item.requests";

export function ItemComponent(value) {

    const [listItem, setListItem] = useRecoilState(itemState);

    const updateItemStatus = (e) => {
        setListItem(filterListItem(listItem, {...value.value, status: !value.value.status}));
        updateItem(value.value.id, value.value.itemText, !value.value.status);
    }

    const updateItemText = (e) => {
        setListItem(filterListItem(listItem, {...value.value, itemText: e.target.value}));
    }

    const updateItems = (e) => {
        updateItem(value.value.id, value.value.itemText, value.value.status);
    }

    const removeItem = () => {
        deleteItem(value.value.id).finally(() => {
            allItem().then(
                res => setListItem(res)
            );
        })
    }

    return(
        <Box w='100%' p={4}>
            <Checkbox isChecked={value.value.status}
                      onChange={(e) => updateItemStatus(e)}
                      margin='10px 20px 0 0 '></Checkbox>
            <Input value={value.value.itemText}
                   onChange={updateItemText}
                   onBlur={updateItems}
                   placeholder='item'
                   size='md'
                   width='200px'
                   margin='0 20px 0 0'/>
            <Button onClick={removeItem}>Remove</Button>
        </Box>
    )
}

function filterListItem(items, item){
    return items.map((_item) => {
        if(_item.id === item.id){
            return item;
        }else{
            return _item;
        }
    })
}
