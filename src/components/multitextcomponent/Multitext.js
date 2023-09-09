import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import _ from 'lodash';

export default function MultiTextComponent(props) {
    return(
        <Stack spacing={3} sx={{ width: 500 }}>
            <Autocomplete
                multiple
                id="tags-filled"
                options={user_list.map((option) => option.title)}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                        />
                    ))
                }

                onChange={(event, value) => {
                    console.log("value : ", value)
                    console.log("props data : ",props.data)
                    var unique = []
                    if(value.length > props.data.length){
                        props.action((arr) => [...arr, value[value.length - 1]]);
                    }

                    if(value.length <= props.data.length) {
                        const removal_data = findUnique(value, _.cloneDeep(props.data), unique).flat()[0];
                        const arr = removeListElement(props.data, removal_data);
                        props.action(arr);
                    }
                }}

                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="filled"
                        label="Data to be randomized"
                        placeholder="Favorites"
                    />
                )}
            />
        </Stack>
    )
}

function findUnique(arr1,arr2,unique){
    for(let i = 0; i <  arr1.length; i++){
        let flag = 0;
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr2.splice(j,1);
                flag =1;
            }
        }
        if(flag ===0){
            unique.push(arr1[i]);
        }
    }
    unique.push(arr2);
    return unique;
}

function removeListElement(arr, removal_element) {
    let arr1 = _.cloneDeep(arr);
    let filtered_arr = [];
    for (let index = 0; index < arr1.length; index++) {
        if(arr1[index] !== removal_element){
            filtered_arr.push(arr1[index])
        }
    }
    return filtered_arr;
}

const user_list = []
