import { useState } from 'react';
import { useAuthContext } from '../../contexts/auth-context'; // Assurez-vous de fournir le bon chemin vers votre authContext

const Register = () => {
  const { signUp } = useAuthContext();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      await signUp(email, username, password);
      // Rediriger vers une autre page ou effectuer une autre action si nécessaire
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirmer le mot de passe:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
