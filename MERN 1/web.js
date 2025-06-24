const foodItems = [
  {
    image: "https://source.unsplash.com/200x150/?pizza",
    description: "Cheesy Pepperoni Pizza",
  },
  {
    image: "https://source.unsplash.com/200x150/?burger",
    description: "Classic Beef Burger with Fries",
  },
  {
    image: "https://source.unsplash.com/200x150/?sushi",
    description: "Assorted Sushi Platter",
  },
  {
    image: "https://source.unsplash.com/200x150/?pasta",
    description: "Creamy Alfredo Pasta",
  },
  {
    image: "https://source.unsplash.com/200x150/?icecream",
    description: "Vanilla Ice Cream with Toppings",
  },
];

const gallery = document.getElementById("foodGallery");

foodItems.forEach((item) => {
  const box = document.createElement("div");
  box.className = "food-box";

  const img = document.createElement("img");
  img.src = item.image;

  const desc = document.createElement("div");
  desc.className = "description";
  desc.textContent = item.description;

  box.appendChild(img);
  box.appendChild(desc);
  gallery.appendChild(box);
});
