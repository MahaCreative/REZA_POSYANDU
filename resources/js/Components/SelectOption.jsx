import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";

export default function SelectOption({
    className,
    children,
    label,
    error,
    ...props
}) {
    return (
        <FormControl variant="filled" fullWidth className={className}>
            <InputLabel id="demo-simple-select-filled-label">
                {label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                label={label}
                error={error ? true : false}
                helperText={error}
                {...props}
            >
                {children}
            </Select>
        </FormControl>
    );
}
