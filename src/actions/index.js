export const add = data => ({
    type: 'ADD',
    payload: data
})

export const edit = data => ({
    type: 'EDIT',
    payload: data
})

export const del = id =>({
    type:'DEL',
    payload: id
})

export const editType = data => ({
    type: 'EDIT_TYPE',
    payload: data
})

