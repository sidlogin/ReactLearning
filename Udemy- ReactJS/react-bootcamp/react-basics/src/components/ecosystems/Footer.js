import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'

const Footer = ({length}) => {
  const today = new Date();

  return (
    <footer>
        <p>{length} List {length === 1 ? 'item' : 'Items'}<br />
        Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer