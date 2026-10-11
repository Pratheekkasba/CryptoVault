import { Button } from '@/components/ui/button';
import { API_BASE_URL } from '@/Api/api';

const LoginWithGoogle = () => {
  const handleGoogleLogin = () => {
    window.location.assign(`${API_BASE_URL}/auth/login/google`);
  };

  return (
    <div className='flex h-screen justify-center items-center flex-col space-y-10'>
      <h2>Login</h2>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </div>
  );
};

export default LoginWithGoogle;
