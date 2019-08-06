import React, {Fragment} from 'react';

const ContactWrapper = props => {
  const { data, isEditMode } = props;
  return (  
    <Fragment>
      {data.map((item, index) => (
        <tr key={index.toString()}>
          {(isEditMode > -1 && isEditMode === item.id) ? (
            <>
              <td>
                <input 
                  // customName={item.name} 
                  name="name" 
                  value={item.name} 
                  onChange={(event) => props.onChange(index, event)} 
                />
              </td>
              <td>
                <input 
                  name="phone" 
                  value={item.phone} 
                  onChange={(event) => props.onChange(index, event)} 
                />
              </td>
            </>
          ) : (
            <>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </>
          )}
          <td>
            <button onClick={()=>props.onToggleEditMode(item.id)}>Edit</button>
          </td>
          <td>
            <button onClick={()=>props.onRemoveContact(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </Fragment>
  );
}

ContactWrapper.defaultProps = {
  data: [],
  onChange: ()=>{},
  onToggleEditMode: ()=>{},
  onRemoveContact: ()=>{}
}
 
export default ContactWrapper;