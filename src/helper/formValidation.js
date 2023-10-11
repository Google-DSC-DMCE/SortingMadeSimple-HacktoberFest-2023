import * as yup from "yup";


export const basicSchema = yup.object().shape({
    arrayy: yup.string().required("Required"),
});
