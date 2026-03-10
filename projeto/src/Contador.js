import React, { Component } from "react"

class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            nome: "Kessy"
        }
    }

    aumentar = () => {          // faz com arrow function, se não voce vai ter que amarrar o this usando "bind()"
        let state = this.state  // fazendo um clone de state original para poder modificar (como se fosse uma var aux)
        state.contador += 1
        this.setState(state)    // o setState espera um objeto, e ai ele faz um merge com o objeto original
                                // mas voce pode setar tbm só a variavel de state "contador" ou "nome" individualmente.
    }

    render() {
        return (
            <div>
                <button onClick={this.aumentar} className={this.props.className}>+</button>
                <p>{this.state.contador}</p>
            </div>
        )
    }
}

export default Contador