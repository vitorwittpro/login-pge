'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de autenticação
    if (email === 'user@example.com' && password === '123019') {
      // Define os cookies com os valores manuais
      document.cookie = `ACCESS_TOKEN=${token}; path=/; max-age=3600; secure; SameSite=Strict`;

      router.push('/home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        />
        <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        />
      
        <button type="submit" style={{ padding: '10px 20px', marginTop: '20px' }}>
          Login
        </button>
      </form>
    </div>
  );
}