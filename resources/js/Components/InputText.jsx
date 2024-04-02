import React from "react";
import { TextField } from "@mui/material";
export default function InputText({ label, error, ...props }) {
    return (
        <div>
            <TextField
                className="w-full"
                {...props}
                id="filled-basic"
                label={label}
                variant="filled"
                error={error ? true : false}
                helperText={error}
            />
        </div>
    );
}
