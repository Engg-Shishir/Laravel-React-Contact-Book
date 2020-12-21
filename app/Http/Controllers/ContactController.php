<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{    
    public function store(Request $request)
    {
        $new = Contact::create([
          'fullname' => $request->fullname,
          'email' => $request->email,
          'phone' => $request->phone,
        ]);

        if($new)
        {
            return response()->json(['status'=>200]);
        }
    }   
    
    public function index()
    {
      $contacts = Contact::all();
      return response()->json(['status'=>200, 'contacts'=>$contacts]);
    }
}
