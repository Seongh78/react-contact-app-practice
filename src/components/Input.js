import React from 'react'

const Input = props => {
  const { type, name, placeholder } = props;
  let view;

  switch(type){
    case "password":
      view = <input type={type} placeholder={placeholder} />;
      break;
    case "email":
      view = (
        <React.Fragment>
          <input type={'text'} placeholder={placeholder} />@
          <input type={'text'} />
        </React.Fragment>
      );
      break;
    case "phone":
      view = (
        <React.Fragment>
          <input type={'text'} />-
          <input type={'text'} />-
          <input type={'text'} />
        </React.Fragment>
      );
      break;

    case "text":
    default:
      view = (
        <input 
          type={type} 
          name={name}
          placeholder={placeholder} 
          onChange={(e)=> props.onChange({name: e.target.name, value:e.target.value})} 
        />
      );
      break;
  }

  return view;
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'Text',
  onChange: () => {}
}

export default Input;
