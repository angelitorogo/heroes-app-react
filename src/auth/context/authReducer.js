import { types } from "../types/types";




export const authReducer = ( state = {}, action ) => {

    //No llamar a niguna funcion aqui, ni console.log(), ni localstorage, etc

    switch (action.type) {

        case types.login:
            
            return {
                ...state, // Por si hay algun tipo de configuracion en el estado que no se quiera cambiar...en este caso no hace falta, pero se recomienda poner
                logged: true,
                user: action.payload
            };

        case types.logout:
            
            return {
                logged: false,
            };
    
        default:
            return state;

    }

}