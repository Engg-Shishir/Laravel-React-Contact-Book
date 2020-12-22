<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{    
    # Store Contact
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
    
    # Show Contact
    public function index()
    {
      $contacts = Contact::all();
      return response()->json(['status'=>200, 'contacts'=>$contacts]);
    }    
    
    # Edit Contact
    public function edit($id)
    {
      $contact = Contact::find($id);
      return response()->json(['status'=>200, 'contact'=>$contact]);
    }

    # Update Contact
    public function update(Request $request)
    {
      $new = Contact::where('id', $request->id)->update([
        'fullname' => $request->fullname,
        'email' => $request->email,
        'phone' => $request->phone,
      ]);

      if($new)
      {
          return response()->json(['status'=>200]);
      }
    }


    # Delete Contact
    public function delete($id)
    {
      $done = Contact::find($id)->delete();     
      
      if($done)
      {
          return response()->json(['status'=>200,'success'=>'Contact Delete Successfully']);
      }
    }
}
