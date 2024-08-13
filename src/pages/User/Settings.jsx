import React, { useState } from 'react';

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [privacySetting, setPrivacySetting] = useState('Public');
  const [theme, setTheme] = useState('Light');
  const [language, setLanguage] = useState('English');
  const [accountVisibility, setAccountVisibility] = useState('Visible');
  const [savedSettings, setSavedSettings] = useState({
    emailNotifications,
    privacySetting,
    theme,
    language,
    accountVisibility,
  });

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedSettings({
      emailNotifications,
      privacySetting,
      theme,
      language,
      accountVisibility,
    });
    alert('Settings Saved Successfully!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={handleSaveSettings}>
        <label className="animated-label">
          Email Notifications:
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="animated-input"
          />
        </label>
        <label className="animated-label">
          Privacy Settings:
          <select
            value={privacySetting}
            onChange={(e) => setPrivacySetting(e.target.value)}
            className="animated-select"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </label>
        <label className="animated-label">
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="animated-select"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </label>
        <label className="animated-label">
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="animated-select"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </label>
        <label className="animated-label">
          Account Visibility:
          <select
            value={accountVisibility}
            onChange={(e) => setAccountVisibility(e.target.value)}
            className="animated-select"
          >
            <option value="Visible">Visible</option>
            <option value="Hidden">Hidden</option>
          </select>
        </label>
        <button type="submit" className="animated-button">Save Settings</button>
      </form>
      <div className="settings-summary">
        <h3>Current Settings:</h3>
        <p>Email Notifications: {savedSettings.emailNotifications ? 'Enabled' : 'Disabled'}</p>
        <p>Privacy Setting: {savedSettings.privacySetting}</p>
        <p>Theme: {savedSettings.theme}</p>
        <p>Language: {savedSettings.language}</p>
        <p>Account Visibility: {savedSettings.accountVisibility}</p>
      </div>
      <style jsx>{`
        .settings-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #f9f9f9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        .animated-label {
          margin-bottom: 15px;
          animation: slideIn 0.5s ease-in;
        }
        .animated-input,
        .animated-select {
          margin-top: 5px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 100%;
          transition: border-color 0.3s ease;
        }
        .animated-input:focus,
        .animated-select:focus {
          border-color: #007bff;
          outline: none;
        }
        .animated-button {
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .animated-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        .settings-summary {
          margin-top: 20px;
        }
        .settings-summary h3 {
          margin-bottom: 10px;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Settings;
