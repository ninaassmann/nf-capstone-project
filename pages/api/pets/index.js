import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const pets = await Pet.find();
    return response.status(200).json(pets);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
