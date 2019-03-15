export const createProject = (project)=>{
    return (dispatch, getState) =>{
        //make async call to server

        //The dispatch method above, returns an action/object to the reducer
        dispatch({type:'CREATE_PROJECT', project})
    }
};
