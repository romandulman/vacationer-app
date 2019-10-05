import {adminConstants} from "./Admin.constants";
import {GetVacationToEdit} from "../admin.api/Admin.api";


export const openEditVac = id =>{
    return dispatch =>{
       dispatch(reqFetchEdit())
     GetVacationToEdit(id).then(
         vacation=>{
             dispatch(sucFetchEdit(vacation))
         },
         error =>{
             
         }
     )
    }
}



 const reqFetchEdit = () =>({
     type:adminConstants.REQUEST_FETCH_FOR_EDIT
 });
const sucFetchEdit = (vacation) =>({
    type:adminConstants.SUCCESS_FETCH_FOR_EDIT , vacation
});



export const addVac =newVac=>({
    type:adminConstants.ADD_VAC, newVac
})

export const delVac =oldVac=>({
    type:adminConstants.DELETE_VAC, oldVac
});

export const editVac =(newVac,oldVac)=>({
    type:adminConstants.EDIT_VAC, newVac , oldVac
});

export const viewReports =data=>({
    type:adminConstants.DELETE_VAC,data
});
