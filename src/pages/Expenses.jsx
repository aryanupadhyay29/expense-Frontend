import React, { useState, useEffect } from "react";
import API from "../services/api";
import AddExpenseModal from "../components/AddExpenseModal"; // 1. Import the modal component

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 2. State to manage modal visibility

  useEffect(() => {
    // Corrected the API endpoint based on your backend setup
    API.get("/api/expenses/")
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);
  
  // 3. Function to add the new expense to the list without a full refresh
  const handleExpenseAdded = (newExpense) => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };

  return (
    // Use a React Fragment to render the modal as a sibling to the page content
    <>
      <div className="page-container">
        <div className="container">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1f2937', margin: 0 }}>
                💰 Expenses
              </h1>
              {/* 4. Open the modal on button click */}
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                Add New Expense
              </button>
            </div>
            
            {expenses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#6b7280', marginBottom: '8px' }}>
                  No expenses yet
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '16px' }}>
                  Start tracking your expenses by adding your first one
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '16px' }}>
                {expenses.map(exp => (
                  <div key={exp.id} className="card" style={{ padding: '20px', margin: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', margin: '0 0 4px 0' }}>
                          {exp.title}
                        </h3>
                        <p style={{ color: '#6b7280', margin: 0 }}>
                          {exp.category}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#10b981', margin: 0 }}>
                          ${exp.amount.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Conditionally render the modal outside the main page layout */}
      {isModalOpen && (
        <AddExpenseModal 
          onClose={() => setIsModalOpen(false)} 
          onExpenseAdded={handleExpenseAdded} 
        />
      )}
    </>
  );
}