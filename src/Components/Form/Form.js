import React, { Component } from "react";
import s from './Form.module.css'

class Input extends Component {
    state = {
      name: '',
      number: '',
    }

  handleInput = e => {
    const {value, name} = e.target;

    this.setState({
        [name]: value,
      })
    }

    handleSubmit = e => {
      e.preventDefault();

      this.props.onSubmit(this.state);      

      this.reset();
    }

    reset = () => {
      this.setState({name: '', number: ''})
    }

    render() {
        return <div className={s.form}>
            <form onSubmit={this.handleSubmit}>
              <label className={s.label}>Name
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  onChange={this.handleInput}
                  required
                  placeholder='add name...'
                  className={s.input}
              />
              </label>
            <label className={s.label}>Phone number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                onChange={this.handleInput}
                required
                placeholder='add number...'
                className={s.input}
              />
            </label>
              <button type="submit" className={s.button} title='Добавить новый контакт'>Add contact</button>
          </form>
        </div>
    }
}

export default Input;