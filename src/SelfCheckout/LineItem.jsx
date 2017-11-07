import React from 'react'
import TextInput from '../Shared/Forms/TextInput'

const LineItem = (props) => {
  return (
    <div>
      <TextInput label={`Enter the price of item ${props.itemNum}`}
        onSubmit={props.handlePrice} />
      <TextInput label={`Enter the quantity of item ${props.itemNum}`}
        onSubmit={props.handleQuantity} />
    </div>
  )
}

export default LineItem;
