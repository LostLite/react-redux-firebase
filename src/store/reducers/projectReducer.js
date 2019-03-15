const initState = {
    projects: [
        {id:'1',title:'Project One',content:'Blah blah blah'},
        {id:'2',title:'Project Two',content:'Blah blah blah'},
        {id:'3',title:'Project Three',content:'Blah blah blah'},
        {id:'4',title:'Project Four',content:'Blah blah blah'},
    ]
}

const projectReducer = (state = initState, action) =>{

    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            break;
        default:
            break;
    }

    return state
}

export default projectReducer;