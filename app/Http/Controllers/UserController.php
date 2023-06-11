<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;
use Illuminate\Validation\Rules;
use Illuminate\Http\Request;
use App\Models\Profile;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['content'] = 'index';
        $data['TITLE'] = 'لوحة التحكم';
        $data['main_title'] = 'المستخدمون ';
        $data['sub_title'] = 'عرض المستخدمون';
        $data['sub_of_title'] = ' ';
        $data['users'] =  User::with('profile')->get();

        return view('Users.index')->with($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'unique:users,username', 'min:5'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::default()],
        ]);
        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        return redirect()->route('dashboard');
    }
    public function makeAdmin(Request $request, $id)
    {
        if ($request->isAdmin == 1)
        {
            User::where('id', $id)->update([
                'isAdmin' => 0,
            ]);
        }
        elseif ($request->isAdmin == 0){
            User::where('id', $id)->update([
                'isAdmin' => 1,
            ]);
        }
        return redirect()->route('dashboard');

    }
    public function makeActive(Request $request, $id)
    {
        if ($request->active == 1)
        {
            User::where('id', $id)->update([
                'active' => 0,
            ]);
        }
        elseif ($request->active == 0){
            User::where('id', $id)->update([
                'active' => 1,
            ]);
        }
        return redirect()->route('dashboard');

    }
    public function editProfile($id){
        $user = User::with('profile')->where('id',$id)->first();
         return view('Users.editProfile')->with('user',$user);
    }

    public function updateProfile(Request $request,$id){
        $request->validate([
        'bdate' => ['required'],
        'country' => ['required']
        ]);
        $data = [
            'user_id'=>$id,
            'bdate'=>$request->bdate,
            'country'=>$request->country,
        ];

       $user = Profile::find($id);

       if ($request->hasFile('image'))
       {

           $image = $request->file('image');
           $imageURL= $image->store('Users','public');
           $data['image']= $imageURL;
       }

       if ($user){
           if ($request->hasFile('image'))
           {
               if (isset($user->image)) {
                   Storage::disk('public')->delete($user->image);
               }
           }
           $user->update($data);
       }else{

           Profile::create($data);
       }
        return redirect()->route('dashboard');

    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if ($request->isAdmin == 1)
        {
            User::where('id', $id)->update([
                'isAdmin' => 0,
            ]);
        }
        elseif ($request->isAdmin == 0){
            User::where('id', $id)->update([
                'isAdmin' => 1,
            ]);
        }
        return redirect()->route('dashboard');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (isset($user->profile->image)) {
            Storage::disk('public')->delete($user->profile->image);
        }

        $user->profile()->delete();
        $user->delete();
        return redirect()->route('dashboard')
            ->with('success', 'User Deleted Successfully');
    }
}
