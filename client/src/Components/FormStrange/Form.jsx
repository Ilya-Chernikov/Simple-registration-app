import React, {useEffect, useMemo, useReducer} from 'react';
import { nanoid } from 'nanoid';
const Actions = {
    add: "FORM/CHANGE_INPUT_VALUE",
    clear: "FORM/CLEAR_INPUTS"
}
const reducer = (state, action) =>{
    switch (action.type){
        case Actions.add : return {
            ...state,
            [action.payload.for]:action.payload.value
        };
        case Actions.clear: return {};
        default : return state
    }

}

// const changeInputs = (child)=>{
//     console.log("changeInp",child);
//     if(child.type === "input") {
//         return {
//             type:"input",
//             props:{...child.props,
//                 for:child.props.for || "utitled:" + nanoid()
//             }
//         }
//     } else return child;
// }
// const goThroughChildren = (children)=>{
//     // if(typeof children === 'string' || children instanceof String) return children;
//     return React.Children.toArray(children).map(child=>{
//         console.log('goThr',child);
//         if(!child.props) return child;
//         if(!child.props.children) return changeInputs(child);
//         return goThroughChildren(child.props.children);
//     });
// }

const createNewChildren = (children, dispatch) => {
    console.log("creating new children")
    dispatch({type:Actions.clear});

  return children.map((child)=>{

      if(child.type === "input") {
          return {
              type:"input",
              props:{...child.props,
                  for:child.props.for || "utitled:" + nanoid()
              }
          }
      }
      return child;
  })
}

const getNewChildren = (ch, state, dispatch) =>{
    console.log("get new children")
    return ch.map(ch=>{
        if(ch.type !== "input") return ch;
        return <input {...ch.props}
                      value={state[ch.props.for] || ""}
                      onChange={(event) => dispatch({
                          type:Actions.add,
                          payload: {
                              for: ch.props.for, // ch === child type input
                              value: `${event.target.value}`
                          }
                      })}
        />
    });
}


export const Form = ({children, btnText = "Отправить", className }) => {
    const [state, dispatch] = useReducer(reducer, {});
    const ch = useMemo(()=>{
        return createNewChildren(children, dispatch);
    }, [children]);


  return (
      <div className={className}>
          {getNewChildren(ch, state, dispatch)}
          <button>{btnText}</button>
      </div>
  )
}



