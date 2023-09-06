import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const updatedPet = await Pet.findByIdAndUpdate(id, {
        $set: request.body,
      });

      if (!updatedPet) {
        return response.status(404).json({ error: "Pet not found." });
      }
      return response.status(200).json({ message: "Pet updated successfully" });
    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
  } else if (request.method === "DELETE") {
    await Pet.findByIdAndDelete(id);
    response.status(200).json({ message: "Pet successfully deleted." });
  } else {
    response.status(405).json({ error: "Method Not Allowed" });
  }
}
