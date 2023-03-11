import { useSession } from '@supabase/auth-helpers-react';
import UpdateProfie from './components/UpdateProfile';

const Update = () => {
  const session = useSession();
  if (session) return <UpdateProfie session={session} />;
  return <div />;
};

export default Update;
