import { types } from "../types/types"

export const setError = (err) => {
   return {
      type: types.uiSetError,
      payload: err
   }
}

export const removeError = () => {
   return{
      type: types.uiRemoveError
   }
}

export const setLoading = () =>{
   return{
      type: types.uiStartLoading,
   }
}

export const removeLoading = () =>{
   return{
      type: types.uiFinishLoading,
   }
}