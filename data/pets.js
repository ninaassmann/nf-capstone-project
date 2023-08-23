const initialPets = [
  {
    id: "1",
    slug: "odin",
    petName: "Odin",
    petBreed: ["Aktia"],
    mixed: false,
    petBirthday: "2023-01-05",
    vet: {
      name: "Dr. Dagobert Duck",
      address: "Entenhausen",
      phone: "123456789",
    },
    food: {
      name: "Wildkind Idaho Valley",
      petAge: "Puppy",
      notes: "",
      type: "Dry",
      size: "8000",
      price: "59.99",
      dailyNeed: "450",
      stock: 9750,
    },
  },
  {
    id: "2",
    slug: "freki",
    petName: "Freki",
    petBreed: ["German Shepherd Dog"],
    mixed: true,
    petBirthday: "2020-11-20",
    vet: {
      name: "Dr. Dagobert Duck",
      address: "Entenhausen",
      phone: "123456789",
    },
    food: {
      name: "Wildkind Great Woods",
      petAge: "Adult",
      notes: "",
      type: "Dry",
      size: "12000",
      price: "69.99",
      dailyNeed: "375",
      stock: 4500,
    },
  },
  {
    id: "3",
    slug: "puppy",
    petName: "Puppy",
    petBreed: ["Eurasier", "Akita"],
    mixed: true,
    petBirthday: "2023-08-15",
    vet: {
      name: "Dr. Dagobert Duck",
      address: "Entenhausen",
      phone: "123456789",
    },
    food: {
      name: "Wolf of Wilderness Wild Hills",
      petAge: "Puppy",
      notes: "getreidefrei",
      type: "Dry",
      size: "12000",
      price: "55.99",
      dailyNeed: "300",
      stock: 8600,
    },
  },
  {
    id: "4",
    slug: "geri",
    petName: "Geri",
    petBreed: ["Akita"],
    mixed: false,
    petBirthday: "2020-01-01",
    vet: {
      name: "Dr. Dagobert Duck",
      address: "Entenhausen",
      phone: "123456789",
    },
    food: {
      name: "Wolfsblut Wild Duck",
      petAge: "Puppy",
      notes: "some notes",
      type: "Dry",
      size: "12000",
      price: "69.99",
      dailyNeed: "345",
      stock: 8600,
    },
  },
];

export default initialPets;
