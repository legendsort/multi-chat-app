import UserService from '../supabase/User';
import PromtService from '../supabase/Prompt';

const SignIn = () => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    
    // test for user service find 
    // const response = await UserService.find("Sortoite");
    // console.log(response);
    
    // const prompt = {
    //   "tag": "test s",
    //   "price": "price 1",
    //   "image": "image 1"
    // }
    // const response = await PromtService.create(prompt);
    // console.log(response);


    const response = await PromtService.find("test 1");
    console.log(response);

  };
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl justify-center items-center ">
      <input type = "button" value = "test" onClick = {handleClick} color = "red" />
    </div>
  );
};

export default SignIn;
