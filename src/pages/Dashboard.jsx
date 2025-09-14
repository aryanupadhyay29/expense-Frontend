import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const quickActions = [
    { title: "Add Expense", description: "Record a new expense", link: "/expenses", icon: "💰", color: "#10b981" },
    { title: "View Groups", description: "Manage your expense groups", link: "/groups", icon: "👥", color: "#3b82f6" },
    { title: "Payments", description: "Track payments and settlements", link: "/payments", icon: "💳", color: "#8b5cf6" },
    { title: "Profile", description: "Update your account settings", link: "/profile", icon: "⚙️", color: "#f59e0b" }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}>
            Welcome to ExpenseIQ
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Take control of your finances with our powerful expense management tools
          </p>
        </div>

        <div className="dashboard-grid">
          {quickActions.map((action, index) => (
            <Link 
              key={index}
              to={action.link} 
              style={{ textDecoration: 'none' }}
            >
              <div className="card" style={{ 
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  fontSize: '48px', 
                  marginBottom: '16px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>
                  {action.icon}
                </div>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '700', 
                  color: action.color,
                  marginBottom: '8px'
                }}>
                  {action.title}
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '16px',
                  margin: 0
                }}>
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="card" style={{ marginTop: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px', color: '#1f2937' }}>
            Get Started
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '24px' }}>
            Choose an option below to begin managing your expenses
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/expenses" className="btn btn-primary">
              Start Tracking Expenses
            </Link>
            <Link to="/groups" className="btn btn-outline">
              Create Your First Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
