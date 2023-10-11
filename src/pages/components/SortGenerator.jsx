import { Button, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React, { useState } from "react";
import { basicSchema } from "../../helper/formValidation"

const SortGenerator = ({ name, image, sortFunc }) => {

    const [tableContent, setTableContent] = useState(null)

    const columns = name === 'insertion' ? ([
        { field: 'id', headerName: 'Count', width: 150 },
        { field: 'iteration', headerName: 'Iteration', width: 330 },
        { field: 'i_value', headerName: 'i', width: 150 },
        { field: 'j_value', headerName: 'j', width: 150 },
        { field: 'key', headerName: 'Key', width: 100 },
    ]) : ([
        { field: 'id', headerName: 'Count', width: 150 },
        { field: 'iteration', headerName: 'Iteration', width: 430 },
        { field: 'i_value', headerName: 'i', width: 250 },
        { field: 'j_value', headerName: 'j', width: 250 },
    ]);

    const onSubmit = async (values) => {
        let arr = values.arrayy.split(" ").map(Number);
        let arrObj = sortFunc(arr);
        setTableContent(arrObj);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                arrayy: "",
            },
            validationSchema: basicSchema,
            onSubmit,
        });


    console.log(errors);

    return (
        <>
            <Box sx={{
                display: "flex", alignItems: "center", flexDirection: 'column', width: "100vw", height: "100vh"
            }}>
                <Box sx={{ width: "53vw", height: '18vh', display: "flex", alignItems: "center", justifyContent: "center", marginY: "1rem", marginTop: '4.5rem' }}>
                    <img src={image} style={{ maxWidth: 'auto', height: '100%' }} />
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{
                        display: "flex", alignItems: "center", flexDirection: 'column', mt: '1.5rem'
                    }}>
                        <TextField
                            label="Enter a sequence"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.arrayy}
                            name="arrayy"
                            variant="filled"
                            sx={{ width: 400, borderRadius: '15px' }}
                        />

                        <Box sx={{ mt: '1rem' }} >
                            <Button variant="contained" type="submit"
                                color='error'
                                sx={{ marginTop: '2rem', width: 150 }}>Generate</Button>
                        </Box>
                    </Box>
                </form>


                {tableContent && (
                    <Box mt='40px' height='75vh' width='60vw'>
                        <DataGrid columns={columns} rows={tableContent} />
                    </Box>
                )}


            </Box>
        </>
    );
};

export default SortGenerator;
