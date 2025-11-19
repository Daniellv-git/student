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

<!-- Grid that JS will fill -->
<div class="grid-container" id="grid_container"></div>

<script>
    // Connect to the grid container in the HTML
    var container = document.getElementById("grid_container");

    // Image base URL
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";

    // Data for places you've lived
    var living_in_the_world = [
        {
            flag: "0/01/Flag_of_California.svg",
            greeting: "Hey",
            description: "I lived in California my entire life"
        }
        // Add more objects like this later if you want
    ];

    // Build one grid item per place
    for (const location of living_in_the_world) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        var img = document.createElement("img");
        img.src = http_source + location.flag;
        img.alt = location.flag + " Flag";

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

## Journey Through Life

Here is what I did at those places:

- 🏫 In my younger days I went to Stone Ranch Elementary School.  
- 🏫 For middle school I went to Oak Valley.  
- 🎓 I now go to Del Norte High School in 9th grade.  
- ⛪ I live in San Diego, which is very nice.  
- 🏢 I visit Belarus every summer to see my family.  

---

## Culture, Family, and Fun

Everything for me, as for many others, revolves around family and faith.

- My mother told me that I was Danish, English, and Irish. Here is my researched  
  **[family tree]({{site.baseurl}}/images/about/familytree.png)**.  
- My family is pretty big as I have been married twice. My first wife passed away.  
  We had 5 kids — 4 adopted by me, 1 biological — plus 3 grandkids.  
  My grandkids call me **Abuilito**.  
- The gallery shows some of my family, fun, culture, and faith memories.

<comment>
Gallery of Pics — scroll to the right for more.
</comment>

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/missionary.jpg" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/john_tamara.jpg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/tamara_fam.jpg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/surf.jpg" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/john_lora.jpg" alt="Image 5">
  <img src="{{site.baseurl}}/images/about/lora_fam.jpg" alt="Image 6">
  <img src="{{site.baseurl}}/images/about/lora_fam2.jpg" alt="Image 7">
  <img src="{{site.baseurl}}/images/about/pj_party.jpg" alt="Image 8">
  <img src="{{site.baseurl}}/images/about/trent_family.png" alt="Image 9">
  <img src="{{site.baseurl}}/images/about/claire.jpg" alt="Image 10">
  <img src="{{site.baseurl}}/images/about/grandkids.jpg" alt="Image 11">
  <img src="{{site.baseurl}}/images/about/farm.jpg" alt="Image 12">
</div>
