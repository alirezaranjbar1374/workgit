import axios from "axios";

export const TheachersListAction = () => {
    return async dispatch => {
        try {
        dispatch({type:"THEACHER_LIST_REQUSET"})
        const {data}= await  axios.get(`${process.env.REACT_APP_BASE_URL}/AllTeacher`);
        dispatch({
            type:"THEACHERS_LIST_SUCSSES",
            payload:data
        })
        } catch (e) {
            console.log("err",e);
        }
    };
};

export const TheacherOneAction = (id) => {
    return async dispatch => {
        try {
        dispatch({type:"THEACHER_DETIL_REQUSET"})
        const {data}= await  axios.get(`${process.env.REACT_APP_BASE_URL}/AllTeacher/${id}`);

        dispatch({
            type:"THEACHERS_DETIL_SUCSSES",
            payload:data
        })
        } catch (e) {
            console.log("err",e);
        }
    };
};




