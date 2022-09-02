import * as React from 'react'
import Box from '@mui/material/Box'
import {LocalizationProvider, StaticDatePicker} from '@mui/x-date-pickers'
import {TextField} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

export const StaticDateRangePickerDemo = () => {
    const [value, setValue] = React.useState([null, null])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs='desktop'
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps}></TextField>
                        <Box sx={{mx: 2}}>to</Box>
                        <TextField {...endProps}></TextField>
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    )

}
