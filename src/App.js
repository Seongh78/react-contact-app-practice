import React from 'react';
import logo from './logo.svg';
import './App.css';
import { list } from 'postcss';


class App extends React.Component {
  
  state = {
    name: '',
    phone: '',

    contact :[ 
      {
        id: 1,
        name: 'david',
        phone: '010-0000-1111'
      },
      {
        id: 2,
        name: 'kelly',
        phone: '010-0000-2222'
      },
      {
        id: 3,
        name: 'frank',
        phone: '010-0000-3333'
      },
      {
        id: 4,
        name: 'aaa',
        phone: '010-0000-4444'
      },
    ]
  }

  /**
   * 삭제함수
   */
  _handleRemoveContact = id => {
    const newContact = this.state.contact.filter(c => c.id !== id)
    this.setState({ contact: newContact })
  }

  /**
   * 등록함수
   */
  _handleCreateContact = () => {
    const lastId = this.state.contact[this.state.contact.length - 1].id + 1;

    this.setState({
      contact: [
        ...this.state.contact, 
        {
          id: lastId,
          name: this.state.name,
          phone: this.state.phone
        }
      ]
    }, ()=> {
      console.log(this.state.contact)
    })
  }

  /**
   * state 변경
   */
  _handleChangeState = (target, value) => {
    this.setState({ [target] : value });
  }
  // _handleChangeState = event => {
  //   this.setState({ [event.target.name] : event.target.value });
  // }
  
  /**
   * 뷰
   */
  render(){

    const {contact, name, phone} = this.state;

    return (
      <div className="App">
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>이름</th>
                <th>연락처</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input value={name} name="name" onChange={(event)=>this._handleChangeState('name', event.target.value)} placeholder="name" /></td>
                <td><input value={phone} name="phone" onChange={(event)=>this._handleChangeState('phone', event.target.value)} placeholder="phone" /></td>
                <td>
                  <button onClick={()=> this._handleCreateContact()}>New</button>
                </td>
              </tr>
              {
                contact.map(item => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button onClick={()=>this._handleRemoveContact(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
