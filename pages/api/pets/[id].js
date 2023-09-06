import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const pet = await Pet.findById(id);

    if (!pet) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(pet);
  }
}
