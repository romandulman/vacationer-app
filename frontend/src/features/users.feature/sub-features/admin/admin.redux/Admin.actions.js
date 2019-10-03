import {adminConstants} from "./Admin.constants";





export const addVac =(newVac)=>({
    type:adminConstants.ADD_VAC,
    payload: {newVac}
})

export const delVac =(oldVac)=>({
    type:adminConstants.DELETE_VAC,
    payload: {oldVac}
});

export const editVac =(newVac,oldVac)=>({
    type:adminConstants.EDIT_VAC,
    payload: {newVac,oldVac}
})

export const viewReports =(data)=>({
    type:adminConstants.DELETE_VAC,
    payload: {data}
});
