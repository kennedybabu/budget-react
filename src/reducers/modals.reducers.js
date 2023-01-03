const reducer = (state={isOpen:false}, action) => {
    switch(action.type) {
        case 'OPEN_EDIT_MODAL':  
            return {...state, isOpen:true, id: action.payload.id}          
        case 'CLOSE_EDIT_MODAL':            
        default:
            return {...state, isOpen:false, id: null}
    }
}


export default reducer