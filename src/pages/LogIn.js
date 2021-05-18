import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Logo from '../components/Logo';
import { useAuth } from '../context/authContext';
import SEO from '../components/SEO';

const LogIn = () => {
  const { signIn, user } = useAuth();
  const history = useHistory();

  // console.log(`[LogIn] user: ${user}`);

  const handleGoogleSignInClick = async () => {
    try {
      signIn();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      // If successfully signed in, redirect to main page
      history.push('/');
    }
  }, [user, history]);

  return (
    <div className="LogIn">
      <SEO title={'Engram | Signin'} />
      <div className="login-screen">
        <header>
          <Logo />
        </header>
        <main>
          <div className="login-buttons">
            <button
              className="login-button button-bg login-demo"
              onClick={() => signIn('asDemo')}
            >
              Try Demo
            </button>
            <button
              className="login-button button-bg login-google"
              onClick={handleGoogleSignInClick}
            >
              Sign In with Google
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default LogIn;
