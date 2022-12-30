import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/TodoList.module.css'
import TodoInfo from './TodoInfo'
import CustomDropDown from './CustomDropDown'
import { TodoContext } from '../context/TodoListApp'

const MainContainer = () => {
  const data = [
    { label: 'Completed', value: 'Completed', color: '53,139, 126' },
    { label: 'Pending', value: 'Pending', color: '150, 90, 38' },
    { label: 'Not Started', value: 'NotStarted', color: '181, 185, 206' },
  ]

  const { theme, currentAccount, getAllTodoList, todoListCreate, currentAccountBalance, todoList, setTodoList } = useContext(TodoContext);


  useEffect(() => {
    getBlockChainTodoList()
  }, [currentAccountBalance]);

  const getBlockChainTodoList = async () => {
    try {
      const list = await getAllTodoList();
      setTodoList(list);
    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.text} style={{ color: theme == "light" ? 'black' : 'white' }}>
            {currentAccountBalance + " ETH" || 'N/A'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CustomDropDown
              itemStyle={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 15,
                borderRadius: 10,
                padding: 10,
                fontWeight: 500
              }}
              containerStyle={{
                display: 'flex',
                width: 150,
                justifyContent: 'center',
                border: 'none',
                fontSize: '90%',
                borderRadius: 10,
                color: theme == "light" ? 'black' : 'white',
                padding: 15,
                fontWeight: 'bold'

              }}
              data={data}
              darkMode={theme == "dark"}
              label={'Filter by status'}
            />
          </div>
          <button
            onClick={() => todoListCreate({ title: 'yash', description: 'hello', tag: 'yeh' })}
            className={styles.Icon}>Add</button>
        </div>
        {todoList?.map((data) => (
          <TodoInfo  {...data} />
        ))}
      </div>
    </>
  )
}

export default MainContainer
