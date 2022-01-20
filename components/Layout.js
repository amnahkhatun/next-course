import Nav from './Nav';

import styles from '../styles/Home.module.css';

import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
    </>
  )
}
