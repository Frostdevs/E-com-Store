import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useCart } from './CartContext';
import './Alert.css';

const Alert = () => {
  const { alert } = useCart();

  if (!alert.show) return null;

  return (
    <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
      {alert.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
      <span>{alert.message}</span>
    </div>
  );
};

export default Alert;