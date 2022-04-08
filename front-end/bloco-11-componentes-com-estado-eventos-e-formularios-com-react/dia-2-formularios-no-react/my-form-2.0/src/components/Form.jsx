import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <fieldset>
        <form>
          <label>
            Nome
            <input className="inputName"
              type="text"
              name=""
              required
            />
          </label>
          <label>
            Email
            <input className="inputEmail"
              type="email"
              required
            />
          </label>
          <label>
            CPF
            <input className="inputCpf"
              type="text"
              required
            />
          </label>
          <label>
            Endereço
            <input className="inputAdress"
              type="text"
              required
            />
          </label>
          <label>
            Cidade
            <input className="inputCity"
              type="text"
              required
            />
          </label>
          <label htmlFor='inputState'>
            Estado
            <input className="inputState"
              type="radio"
              required
            />
          </label>
        </form>
      </fieldset>
    )
  }
}
