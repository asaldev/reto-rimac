
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



const SelectRegular = () => (
        <div>

            <Select
                defaultValue={10}
                label="Label"
                variant="standard"
            >
                <MenuItem value={10}>RUC</MenuItem>
                <MenuItem value={20}>DNI</MenuItem>
            </Select>           
            <TextField
                label="Label"
                defaultValue="Default text"
                variant="standard"
            />
        </div>
);

export default SelectRegular;
