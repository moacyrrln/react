// import React from "react";

// class ReactClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isUpdate: false,
//       counter: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.counterMessage = this.counterMessage.bind(this);
//   }
//   handleClick() {
//     this.setState({
//       isUpdate: true,
//       counter: this.state.counter + 1,
//     });
//   }
//   counterMessage(counter) {
//     return (
//       <div>
//         <div>
//           Esta mensagem somente deve aparecer quando o estado é atualizado.
//           Se esta mensagem apareceu antes do click, algo esta errado no
//           seu código.
//         </div>
//         <div>
//           {`Quantidade de atualizações do estado: ${counter}`}
//         </div>
//       </div>
//     )
//   };
//   render() {

//     console.log(this.state);

//     return (
//       <div>
//         <div>Abra o console do seu navegador</div>
//         <div>
//         { this.state.isUpdate && counterMessage(this.state.counter) } { /* Altere seu código nesta linha para que ele funcione corretamente */}
//         </div>
//         <button onClick={ this.handleClick }>
//           Clique aqui para atualizar o estado do componente
//         </button>
//       </div>
//     );
//   }
// }

// export default ReactClass;

// import React from "react";

// class ReactClass extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {

//     console.log(this.state);

//     return (
//       <div>
//       </div>
//     );
//   }
// }

// export default ReactClass;

import React from "react";
// import { createStore } from 'react'

class ReactClass extends React.Component {
  render() {
    const person1 = {
      firstName: "João",
      lastName: "da Silva",
      age: 18,
      car: "Fusca",
    };

    const person2 = {
      primeiroNome: "Maria",
      ultimoNome: "Almeira",
      idade: 21,
      hobby: "Bike",
    };

    const detailPerson = (person) => {
      const details = Object.entries(person);
      return details.map((properties) => `<li>${properties[0]}: ${properties[1]}</li>`);
    };

    const detailAllPerson = (...allPerson) => {
      let all = [...allPerson];
      let all2 = [];
      all.map((person) => {
        all2.push(detailPerson(person));
      });
      return all2;
    };

    console.log(detailAllPerson(person1, person2));

    console.log(person1, person2);

    return (
      <div>
        <ul>
          { detailAllPerson(person1, person2) }
        </ul>
      </div>
    );
  }
}

export default ReactClass;

// const person1 = {
//   firstName: 'João',
//   lastName: 'da Silva',
//   age: 18,
//   car: 'Fusca',
// }

// const person2 = {
//   firstName2: 'Maria',
//   lastName2: 'Almeira',
//   age2: 21,
//   hobby: 'Bike',
// }

// const detailPerson = (person) => {
//   const details = Object.entries(person);
//   return details.map(properties => `${properties[0]}: ${properties[1]}`)
// }

// const detailAllPerson = (...allPerson) => {
//   let all = [...allPerson];
//   let all2 = []
//   all.map((person) => {
//     all2.push(detailPerson(person))
//   })
//   return all2
// }

// console.log(detailAllPerson(person1, person2))

// console.log(person1, person2)

// import React from 'react'
// import { Provider } from 'react-redux'
// import { render, cleanup } from '@testing-library/react';
// import App from './App';
// import { createStore, combineReducers } from 'redux';
// import clickReducer from './reducers';

// class ReactClass extends React.Component {
// const renderWithRedux = (
//   component,
//   { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
// ) => {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//     store,
//   }
// }

// export default ReactClass;