
import { NextResponse } from "next/server";
import { Configuration,OpenAIApi } from "openai";

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

const openai=new OpenAIApi(configuration);

export async function POST(req:Request){
    try{
        const body = await req.json();
        const {prompt,amount=1,resolution="1024x1024"} = body;

        const response = await openai.createImage({
            prompt: prompt,
            n: parseInt(amount,5),
            size: "512x512",
        });
        return NextResponse.json(response.data.data);
    }
    catch(error){
        console.log(error)
    }
}