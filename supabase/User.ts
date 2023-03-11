import supabase from '../utils/supabase';

const sign_up = async (user: any) => {
  const { email, password, username, avatar_url } = user;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
        avatar_url: avatar_url,
      },
    },
  });
  return {
    data,
    error,
  };
};

const sign_in = async (user: any) => {
  const { email, password } = user;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return {
    data,
    error
  }
};
export default { 
    sign_in,
    sign_up
 };
