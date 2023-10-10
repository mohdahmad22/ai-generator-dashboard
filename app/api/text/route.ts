
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const body = await req.json();
        const {prompt} = body;
        console.log(prompt)
        const response = await fetch(`http://127.0.0.1:5000/genz/${prompt}`)
        console.log(response.json())
        return NextResponse.json(response);
    }
    catch(error){
        console.log(error)
    }
}