import { NextResponse } from "next/server";

export async function POST(data:Request) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return NextResponse.json(result);
}
// query({"inputs": "Astronaut riding a horse"}).then((response) => {
// 	// Use image
// });