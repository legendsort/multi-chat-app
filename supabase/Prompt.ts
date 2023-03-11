import supabase from '../utils/supabase';

const create = async (prompt: any) => {
  const { tag, price, image} = prompt;
  const response = await supabase
    .from('prompt')
    .insert(prompt);
  
  return response;
};

const find = async (tag: any) => {
  
  const { data, error } = await supabase
    .from('prompt')
    .select('id, tag, price, image')
    .eq('tag', tag);
  
  return {
    data,
    error,
  };
};

export default {
  create,
  find
};
