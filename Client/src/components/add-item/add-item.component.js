import { Box, Checkbox, Input, Button  } from '@chakra-ui/react';
import {useState} from "react";
import {addItem, allItem} from "../../requests/item.requests";
import {useSetRecoilState} from "recoil";
import {itemState} from "../../state";

export function AddItemComponent() {

    const [inputValue, setInputValue] = useState('');
    const listItem = useSetRecoilState(itemState);

    const onClickAdd = () => {
        addItem(inputValue, false).finally(() => {
            allItem().then(
                res => listItem(() => {
                    return [...res]
                })
            );
        });

        setInputValue('');
    }

    return(
        <Box w='100%' p={4}>
            <Input placeholder='item'
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   size='md'
                   width='200px'
                   margin='0 20px 0 0'/>
            <Button onClick={onClickAdd}>Add item</Button>
        </Box>
    )
}
