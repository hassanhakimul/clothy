import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        // <!-- component -->
        <div class="bg-no-repeat bg-cover bg-center relative"  style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80")` 
          }}><div class="absolute opacity-20 inset-0 z-0"></div>
          <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
              <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                <div class="self-start hidden lg:flex flex-col mr-14 text-white">
                  <img src="" class="mb-3"/>
                  <h1 class="mb-3 font-bold text-7xl"> Welcome to Clothy </h1>
                  <p class="pr-3 text-xl text-white">Lorem ipsum is placeholder text commonly used in the graphic, print,
                    and publishing industries for previewing layouts and visual mockups</p>
                </div>
              </div>
              <div class="flex justify-center self-center  z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="mb-4">
                      <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                      <p class="text-tarciary">Please sign in to your account.</p>
                    </div>
                    <div class="space-y-5">
                                <div class="space-y-2">
                                      <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                      <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary-400" type="" placeholder="mail@gmail.com"/>
                      </div>
                                  <div class="space-y-2">
                      <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                        Password
                      </label>
                      <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary-400" type="" placeholder="Enter your password"/>
                    </div>
                      <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                        <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                          Remember me
                        </label>
                      </div>
                      <div class="text-sm">
                        <a href="#" class="text-secondary-400 hover:text-primary">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button type="submit" class="w-full flex justify-center bg-secondary  hover:bg-secondary text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                        Sign in
                      </button>
                    </div>
                    </div>
                    <div class="pt-5 text-center text-tarciary text-xs">
                      <Link to='/'>
                      <span>New to Clothy  ? Sing Up.</span> 
                       </Link>
                    </div>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Login;