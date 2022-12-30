import { ethers } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'
import MainContainer from '../components/MainContainer'
import Sidebar from '../components/sidebar'
import { TodoContext } from '../context/TodoListApp'
import styles from '../styles/TodoList.module.css'

const TodoList = () => {
    const { theme, setCurrentAccountBalance, currentAccount, setCurrentAccount, todoListCreate, getAllTodoList } = useContext(TodoContext);

    const [walletDetected, setWalletDetected] = useState(false)


    useEffect(() => {

        // Contecting with metamask //
        const isWalletConnected = async () => {
            if (!window.ethereum) {
                alert("please install meta-mask!")
                return false;
            }

            const account = await window.ethereum.request({ method: "eth_requestAccounts" });

            if (account.length) {
                setCurrentAccount(account[0]);
                const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [account[0], 'latest'] });
                setCurrentAccountBalance(ethers.utils.formatEther(balance));
                setWalletDetected(true);
            } else {
                alert("You dont have any account!");
            }
        }
        isWalletConnected();
        // todoListCreate({name: 'yash', description: 'hello', tag: 'yeh'})
        getAllTodoList().then(res => {

            console.log(res)
        })
    }, [])


    return (
        <div className={styles.container} >
            {walletDetected ? (
                <>
                    <div>
                        <Sidebar />
                       
                    </div>
                    <div className={styles.MainContainer} >
                        <MainContainer />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <Sidebar />
                    </div>
                    <div className={styles.MainContainer} style={{ alignItems: 'center', color: theme != "light" ? 'white' : 'black' }} >
                        <div>Please Connect to Wallet First!</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoList
