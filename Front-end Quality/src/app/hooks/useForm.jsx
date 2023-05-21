import { useState } from "react";

const useForm = (initialState = {}, onSubmit) => {
    const [form, setForm] = useState(initialState);
    const handeleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
    };
    const handleChange = (target) => {
        setForm((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    return { handleChange, form, handeleSubmit };
};
export default useForm;
