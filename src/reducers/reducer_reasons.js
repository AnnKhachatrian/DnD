import uniqid from 'uniqid';

var reasons=[
    { "id":"1",
      "text":"It's really tasty",
      "type":"pros"
    },
    { "id":"2",
      "text":"Too expensive",
      "type": "cons"
    },  
]

export default function(state=reasons, action) {  
  const id= uniqid();  
  switch(action.type){
      case 'ADD':
        return [
          ...state,
          {
            id,
            text: action.payload.text,
            type: action.payload.type
          }
        ];
      case 'EDIT':  
          return state.map((todo) => 
            (todo.id === action.payload.id)
              ? {...todo, text: action.payload.text}
              : todo       
          )
      case 'EDIT_TYPE': 
        return state.map(todo =>
          (todo.id === action.payload.id)
            ? {...todo, type: action.payload.type}
            : todo
        )

      case 'DEL':
        return state.filter(item => item.id !== action.payload)

      default: return state;
  }  
}
 







