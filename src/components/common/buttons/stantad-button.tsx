import React from 'react'
import './styles.css'
import type { ButtonType } from '@/types/types';

interface ButtonProps {
  label: string;
  type: ButtonType;
  fill?: string;
}


const StandardButton: React.FC<ButtonProps> = ({ label, type, fill }) => {
  return (
    <button className={`standard-button ${type} ${fill}`}>
      {label}
    </button>
  )
}

export default StandardButton
