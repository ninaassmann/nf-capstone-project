import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const session = await getServerSession(request, response, authOptions);

      if (!session) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      const pets = await Pet.find();

      return response.status(200).json(pets);
    } catch (error) {
      console.error("Error fetching pets:", error);
      return response.status(500).json({ message: "Internal Server Error" });
    }
  } else if (request.method === "POST") {
    try {
      const petData = request.body;
      await Pet.create(petData);

      response.status(201).json({ status: "Pet created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
