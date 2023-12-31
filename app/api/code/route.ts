
import { NextResponse } from "next/server";
import { Configuration,OpenAIApi,ChatCompletionRequestMessage } from "openai";

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

const openai=new OpenAIApi(configuration);

const instructionMessage:ChatCompletionRequestMessage={
    role:"system",
    content:"You are a code generator. You must answer in markdown code snippets. Use code comments for explaination."
}

export async function POST(req:Request){
    try{
        const body = await req.json();
        const {messages} = body;

        const response = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[instructionMessage,...messages]
        });
        return NextResponse.json(response.data.choices[0].message);
    }
    catch(error){
        console.log(error)
    }
}