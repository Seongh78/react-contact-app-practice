import React from 'react';

// class Title extends React.Component {
//   render(){
//     const {value, onClick} = this.props
//     return (
//       <h1 onClick={()=>onClick(value)}>{value ? value : 'loading...'}</h1>
//     )
//   }
// }

const Title = (props) => {
  const {value, onClick} = props;
  return (
    <h1 onClick={()=>onClick(value)}>{value ? value : 'loading...'}</h1>
  )
}


Title.defaultProps = {
  value: 'loading...'
}

export default Title;