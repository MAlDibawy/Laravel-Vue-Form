<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use App\HTTP\Requests\RegisterRequest;

class RegisterController extends Controller
{
    /**
     * Create a new user instance after a valid registration.
     *
     * @param \App\Http\Requests\RegisterRequest $request
     * 
     * @return \App\User
     */
    protected function create(RegisterRequest $request)
    {
        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' =>bcrypt($request['password']),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Register success.',
        ]);
    }
}
