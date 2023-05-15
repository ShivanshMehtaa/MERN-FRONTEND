import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () =>{
    const {dispatch} = useAuthContext()
    const {dispatch: workoutsDispatch} = useWorkoutsContext()
    const logout = () =>{
        localStorage.removeItem('user')
        //also to clear the global context so no interference

        //dispatch logout action
        dispatch({type:"LOGOUT"}) 
        workoutsDispatch({type:'SET_WORKOUTS', payload: null}) 
    }
    return {logout}
}