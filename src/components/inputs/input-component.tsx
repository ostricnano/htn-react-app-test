import React from 'react'
import styles from './input-component.module.css'

interface InputProps {
  label: string;
  type: string;
}

const InputComponent: React.FC<InputProps> = ({label, type}) => {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <input 
        className={styles.input}
        type={type}
      />
    </div>
  )
}

export default InputComponent