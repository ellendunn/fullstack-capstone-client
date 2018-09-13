import React from'react';

export default function Item(props) {

  
  const items = props.items.map((item, index) => {
    <li key={index}>
      {item}
    </li>
  })
}
