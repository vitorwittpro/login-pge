'use client';

export default function Home() {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const handleRedirect = () => {
    const nuxtUrl = `https://stage.ducsl372u0tvm.amplifyapp.com/`;
    const bearerToken = getCookie('ACCESS_TOKEN');
    const fingerprint = getCookie('FINGERPRINT');

    // Adiciona os cookies no cabeçalho de autorização
    const headers = new Headers();
    headers.append('Authorization', `Bear8er ${bearerToken}`);
    headers.append('x-fingerprint', fingerprint);

    console.log('Redirecionando com headers:', headers);

    // Redireciona para o URL com os headers
    window.location.href = nuxtUrl;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo à Home</h1>
      <button onClick={handleRedirect} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Acessar Plataforma Nuxt.js
      </button>
    </div>
  );
}