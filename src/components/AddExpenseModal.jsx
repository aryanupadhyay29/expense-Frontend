// src/components/AddExpenseModal.js
import React, { useState } from 'react';
import API from '../services/api';

export default function AddExpenseModal({ onClose, onExpenseAdded }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food'); 
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newExpense = {
      userId: 1,
      title,
      amount: parseFloat(amount), 
      category,
      description,
     
    };

    API.post('/api/expenses', newExpense)
      .then(res => {
        onExpenseAdded(res.data); 
        onClose(); 
      })
      .catch(err => {
        console.error("Failed to add expense:", err);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Amount ($)</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Utilities</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description (Optional)</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
}