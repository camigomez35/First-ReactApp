import {createStore} from 'redux'

/*Store con toda la informacion
  La accion nos dice como cambia el Store
  Reducer nos dice como pasarle la informacion desde el Action hasta eñ Store
*/

function reducer(state = 0, action){
  //controla lo que pasa :D :+1:
  if(action.type === 'INCREMENT'){
    return state +1
  }else if (action.type === 'DECREMENT'){
    //No deja que baje de 0 :D
    if(state>0){

      return state -1
    }
  }
  //Si no paso nada
  return state
}

//creamos el Store
const store = createStore(reducer, 0)

const render = function () {
  const state = store.getState()
  console.log(state);
}

store.subscribe(render)

store.subscribe  = () =>{
  console.log(store.getState());
}

//Mandar acciones a toda la aplicacion
//{key: value}
store.dispatch({type: 'INCREMENT'})

//Creamos un botón y lo mostramos en el cuerpo del HTML
const button = document.createElement('button')
button.innerHTML = 'Increment'
button.addEventListener('click', function (){
  console.log("Click!!!");
  //Cuando de click va al dispatch
  store.dispatch({ type: 'INCREMENT' })
})

document.body.appendChild(button)

//Creamos otro boton
const buttonDecrement =  document.createElement('button')
buttonDecrement.innerHTML = 'Decrement'

buttonDecrement.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
})

document.body.appendChild(buttonDecrement)
