const projectsList = [
  {
    name: "Weather Tool",
    description: "Si tu veux un projet qui peux vraiment te servir, c'est le bon projet. Weather Tool permet de regarder la météo actuel dans ta ville. Tu y verra les conditions météorologique, les précipitaions, la visibilitée, l'indice UV, ainsi que les radiations.",
    link: "https://mvittorelli.github.io/Weather-Tool/",
    sourceCodeLink: "https://github.com/Mvittorelli/Weather-Tool",
    previewImage: "https://pomf2.lain.la/f/ke5381mn.png",
    tags: ["html", "css", "js", "api"],
  },
  
];
function createProject() {
    const list = document.getElementById("list");
    const h3 = document.createElement("h3");
    list.appendChild(h3);
    h3.textContent = "Mes Projets";
    
    for (let i = 0; i < projectsList.length; i++) {
        const art = document.createElement("article");
        art.classList.add("projectArt");
        list.appendChild(art);
        
        const img = document.createElement("img");
        art.appendChild(img);
        img.src = projectsList[i].previewImage;
        
        const div = document.createElement("div");
        art.appendChild(div);
        div.classList.add("projectsListDesc");
        
        const title = document.createElement("h3");
        div.appendChild(title);
        title.textContent = projectsList[i].name;
        
        const desc = document.createElement("p");
        div.appendChild(desc);
        desc.textContent = projectsList[i].description;
        
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("links");
        div.appendChild(linkDiv);
        
        const projLink = document.createElement("a");
        linkDiv.appendChild(projLink);
        projLink.textContent = "╭ Voir Le Projet";
        projLink.href = projectsList[i].link;
        
        const sourceCodeLink = document.createElement("a");
        linkDiv.appendChild(sourceCodeLink);
        sourceCodeLink.textContent = "╰ Code Source";
        sourceCodeLink.href = projectsList[i].sourceCodeLink;
        
        const tagDiv = document.createElement("div");
        div.appendChild(tagDiv);
        tagDiv.classList.add("tags");
        
        const tags = projectsList[i].tags;
        for (let j = 0; j < tags.length; j++) {
            const tag = document.createElement("span");
            tagDiv.appendChild(tag);
            tag.textContent = tags[j];
            tag.classList.add(tags[j] + "Tag");
        }
    }
    
}




