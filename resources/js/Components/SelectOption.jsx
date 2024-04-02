import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";

export default function SelectOption({ children, label, error, ...props }) {
    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-filled-label">
                {label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                label={label}
                error={error ? true : false}
                helpertext={error}
                {...props}
            >
                {children}
            </Select>
        </FormControl>
    );
}
