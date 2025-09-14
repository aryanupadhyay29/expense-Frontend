import React, { useState, useEffect } from "react";
import API from "../services/api";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    API.get("/groups")
      .then(res => setGroups(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1f2937', margin: 0 }}>
              👥 Groups
            </h1>
            <button className="btn btn-primary">
              Create New Group
            </button>
          </div>
          
          {groups.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>👥</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#6b7280', marginBottom: '8px' }}>
                No groups yet
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '16px' }}>
                Create your first group to start sharing expenses
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              {groups.map(group => (
                <div key={group.id} className="card" style={{ padding: '20px', margin: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', margin: '0 0 4px 0' }}>
                        {group.name}
                      </h3>
                      <p style={{ color: '#6b7280', margin: 0 }}>
                        Group members and expenses
                      </p>
                    </div>
                    <button className="btn btn-outline" style={{ padding: '8px 16px' }}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
