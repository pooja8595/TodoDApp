import { TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/TodoList.module.css'
import { FaTimes } from 'react-icons/fa';
const OpenForm = ({onClose}) => {
    return (
        <>
            <form className={styles.form}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <label className={styles.headingfrom}> ADD </label>
                <FaTimes size={25} style={{ opacity: 0.8 ,color:'#ff3333' }} onClick={onClose}/>
                </div>
                <div className={styles.textinput}>
                    <TextField id="outlined-basic" label="Title" variant="outlined" sx={{ width: '100%' }} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ width: '100%', marginTop: 5 }} multiline />
                    <TextField id="outlined-basic" label="Tag" variant="outlined" sx={{ width: '100%', marginTop: 5 }} />
                    <div className={styles.btn}>
                        <button type="delete" className={styles.dis}>Discard</button>
                        <button type="submit" className={styles.sub}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default OpenForm