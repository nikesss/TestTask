import React from 'react';
import {
    ChakraProvider,
    Box,
    theme,
    Text,
    Select
} from '@chakra-ui/react';
import {ItemListComponent} from "./components/list-item/item-list.component";
import {AddItemComponent} from "./components/add-item/add-item.component";
import {useRecoilState} from "recoil";
import {filterItemState} from "./state";

function App() {
    const [filter, setFilter] = useRecoilState(filterItemState);

    return (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <AddItemComponent/>
            <Select width='300px' margin='0 auto' value={filter} onChange={event => setFilter(event.target.value)}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Uncompleted'>Uncompleted</option>
            </Select>
            <Text fontSize='2xl'>Tasks</Text>
            <ItemListComponent/>
        </Box>
    </ChakraProvider>
  );
}

export default App;
