import React from 'react';
import logo from './logo.svg';
import './App.css';
import { list } from 'postcss';


class App extends React.Component {
  
  state = {
    isEditMode: -1,
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
    const length = this.state.contact.length;
    const lastId = length > 0 ? this.state.contact[this.state.contact.length - 1].id + 1 : 1;

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
  
  /**
   * 수정모드
   */
  _handleToggleEditMode = (id) => {
    this.setState(prevState => ({ isEditMode: prevState.isEditMode === id ? -1 : id }))
  }

  /**
   * 수정값 반영
   */
  _handleChangeContact = (index, event) => {
    const newContact = this.state.contact.slice(0);
    newContact[index][event.target.name] = event.target.value; 
    this.setState({contact: newContact});
  }
  
  /**
   * 뷰
   */
  render(){

    const {contact, name, phone, isEditMode} = this.state;
    let data = contact;
    if(name){
       data = contact.filter(c=> c.name.indexOf(name) !== -1)
    }

    return (
      <div className="App">
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>이름</th>
                <th>연락처</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input value={name} name="name" onChange={(event)=>this._handleChangeState('name', event.target.value)} placeholder="name" /></td>
                <td><input value={phone} name="phone" onChange={(event)=>this._handleChangeState('phone', event.target.value)} placeholder="phone" /></td>
                <td colSpan="2">
                  <button onClick={()=> this._handleCreateContact()}>New</button>
                </td>
              </tr>
              {
                data.map((item, index) => (
                  <tr key={index.toString()}>
                    {(isEditMode > -1 && isEditMode === item.id) ? (
                      <>
                        <td><input name="name" value={item.name} onChange={(event) => this._handleChangeContact(index, event)} /></td>
                        <td><input name="phone" value={item.phone} onChange={(event) => this._handleChangeContact(index, event)} /></td>
                      </>
                    ) : (
                      <>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                      </>
                    )}
                    <td>
                      <button onClick={()=>this._handleToggleEditMode(item.id)}>Edit</button>
                    </td>
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
