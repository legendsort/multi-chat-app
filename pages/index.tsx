import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import UpdateProfile from './components/UpdateProfile';

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div
      className="px-4 flex justify-center items-center container max-w-2xl  mx-auto min-h-screen my-auto"
      style={{ padding: '50px 0 100px 0' }}
    >
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['google']}
        />
      ) : (
        <UpdateProfile session={session} />
      )}
    </div>
  );
};

export default Home;
