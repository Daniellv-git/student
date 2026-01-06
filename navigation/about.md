---
layout: post
title: About
permalink: /about/
comments: true
---

## As a Conversation Starter

Here are some places I have lived.

<comment>
Flags are made using Wikipedia images.
</comment>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px;
        object-fit: contain;
    }
    .grid-item p {
        margin: 5px 0;
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
    }
    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- Flags grid -->
<div class="grid-container" id="grid_container"></div>

<script>
  var container = document.getElementById("grid_container");
  var http_source = "https://upload.wikimedia.org/wikipedia/commons/";

  var living_in_the_world = [
    {
      flag: "0/01/Flag_of_California.svg",
      greeting: "Hey",
      description: "I lived in California my entire life"
    }
  ];

  for (const location of living_in_the_world) {
    var gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    var img = document.createElement("img");
    img.src = http_source + location.flag;
    img.alt = location.description;

    var description = document.createElement("p");
    description.textContent = location.description;

    var greeting = document.createElement("p");
    greeting.textContent = location.greeting;

    gridItem.appendChild(img);
    gridItem.appendChild(description);
    gridItem.appendChild(greeting);
    container.appendChild(gridItem);
  }
</script>

---

## 🍽️ Favorite Foods

<div id="food_grid"></div>

<script>
  const SITE_BASE = '{{ site.baseurl | default: "" }}';
  const foodGrid = document.getElementById("food_grid");
  const foodContainer = document.createElement("div");
  foodContainer.className = "grid-container";

  // Use `SITE_BASE` so paths work when the site is served under a baseurl
  const favoriteFoods = [
    {
      name: "Hot Dog",
      image: SITE_BASE + '/images/about/hot_dog.svg',
      reaction: "Simple but elite 🌭"
    },
    {
      name: "Ramen",
      image: SITE_BASE + '/images/about/ramen.svg',
      reaction: "Comfort food vibes 🍜"
    },
    {
      name: "Pasta",
      image: SITE_BASE + '/images/about/pasta.svg',
      reaction: "Never gets old 🍝"
    }
  ];

  favoriteFoods.forEach(food => {
    const item = document.createElement("div");
    item.className = "grid-item";

    const img = document.createElement("img");
    img.src = food.image; // works because path is relative to site root
    img.alt = food.name;
    img.style.objectFit = "cover";

    const name = document.createElement("p");
    name.textContent = food.name;
    name.style.fontWeight = "bold";

    const reaction = document.createElement("p");
    reaction.textContent = food.reaction;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(reaction);
    foodContainer.appendChild(item);
  });

  foodGrid.appendChild(foodContainer);
</script>

---

## Journey Through Life

Here is what I did at those places:

- 🏫 In my younger days I went to Stone Ranch Elementary School  
- 🏫 For middle school I went to Oak Valley  
- 🎓 I now go to Del Norte High School in 9th grade  
- ⛪ I live in San Diego, which is very nice  
- 🏢 I visit Belarus every summer to see my family  

---

## Culture, Family, and Fun

Everything for me revolves around family, sports, and friends

<comment>
Gallery of Pics — scroll to the right for more.
</comment>

<div class="image-gallery">
  <img src="{{ site.baseurl }}/images/about/red_rock.jpg" alt="Red Rock Canyon View">
  <img src="{{ site.baseurl }}/images/about/rock_kid.jpg" alt="At Red Rock Canyon">
  <img src="{{ site.baseurl }}/images/about/rock_mom.jpg" alt="Red Rock Canyon Hike">
</div>



