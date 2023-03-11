import UserService from '../supabase/User';

const SignIn = () => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    const response = await UserService.find("Sortoite");
    console.log(response);

  };
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl justify-center items-center ">
      <input type = "button" value = "test" onClick = {handleClick} color = "red" />
    </div>
  );
};

export default SignIn;
