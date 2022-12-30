import React, { useContext } from 'react'
import { FaMoon, FaSun, FaUserAlt, FaHamburger, FaTimes } from 'react-icons/fa';
import { TodoContext } from '../context/TodoListApp';
import styles from '../styles/TodoList.module.css'
// import styles from '../../styles/'


const Sidebar = () => {

  const {setTheme, theme, setToggleSideBar, toggleSidebar} = useContext(TodoContext);


  const togleDarkmode = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.querySelector('body').style.background = "#141625"
    } else {
      setTheme('light');
      document.querySelector('body').style.background = "#eee"
    }
  }
  const toggle = () => {
    setToggleSideBar(!toggleSidebar)
  }
  return (
    <>
      <div className={styles.Sidebar}>
        <button onClick={toggle}
          style={{ width: 50, height: 50, borderRadius: "100%", border: 'none', background: 'rgba(255,255,255,0.05)', color: '#fff' }}
        >{!toggleSidebar ? <FaHamburger size={25} style={{ opacity: 0.7 }} /> : <FaTimes size={25} style={{ opacity: 0.7 }} />}</button>

        <div>
          <button
            style={{ width: 50, height: 50, borderRadius: "100%", marginBottom: 20, border: 'none', background: 'rgba(255,255,255,0.05)', color: '#fff' }}
            onClick={togleDarkmode}>{theme == 'light' ? <FaMoon size={25} style={{ opacity: 0.7 }} /> : <FaSun size={25} style={{ opacity: 0.7 }} />}</button>
          <hr style={{ height: 1, marginBottom: 10, opacity: 0.2 }} />

          <button
            style={{ width: 50, height: 50, borderRadius: "100%", border: 'none' }}
          > <FaUserAlt /></button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
