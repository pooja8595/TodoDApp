import { useState } from 'react';
import '../styles/globals.css'
import TodoListAppProvider from '../context/TodoListApp'

export default function App({ Component, pageProps }) {

  return (
    <TodoListAppProvider>
      <Component  {...pageProps} />
    </TodoListAppProvider>
  )
}
