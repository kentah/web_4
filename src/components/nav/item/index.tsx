import React from 'react'
import { Link } from 'react-router-dom'


interface ItemProps {
  id: string
  label: string
  linkTo: string
}

const Item: React.FC<ItemProps> = props => {

  return(
    <Link 
      id={props.id} 
      to={props.linkTo}
    >
        {props.label}
    </Link>
  )
}

export default Item
