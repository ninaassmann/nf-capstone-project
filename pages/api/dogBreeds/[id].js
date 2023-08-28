export default async function handler(request, response) {
  const query = request.query;
  const { id } = query;

  if (request.method === "GET") {
    const url = `https://api.thedogapi.com/v1/images/${id}`;

    try {
      const dogBreedsResponse = await fetch(url);
      const dogBreedImages = await dogBreedsResponse.json();
      response.status(200).json({ results: dogBreedImages });
    } catch (error) {
      response.status(500).json({ message: "Error" });
    }
  } else {
    console.error("Error fetching dog breed image:", error);
    response.status(500).json({ message: "Error" });
  }
}
