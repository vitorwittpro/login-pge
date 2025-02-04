import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/login'); // Redireciona para a página de login
  return null;
}
