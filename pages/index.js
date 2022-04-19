function addServices(data = {}){
    const container = document.querySelector(".services__results");
	const template = document.querySelector(".services__template");

    template.content.querySelector(".things__subtitle").textContent = data.title;
    template.content.querySelector(".things__description").textContent = data.description;
    template.content.querySelector(".things__img").src = "https://" + data.image;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getImg(id, data){
    const img = data.includes.Asset.find((Asset)=>{
       return Asset.sys.id == id 
   });
   return img;
}; 

 
function getServices(){
    
    const url = "https://cdn.contentful.com/spaces/260af05mooh7/environments/master/entries?access_token=I0iJyvxmIQIWIjosi_-xWr91w4NhuaEIxu0y0x_LFfw&content_type=services";

    return fetch(url).
    then((res)=> {return res.json()}).
    then((res)=>{
        const items = res.items.map((item)=>{
            const id = item.fields.img.sys.id;
            const img = getImg(id, res);
            const linkimg = img.fields.file.url;
            return {
                image: linkimg,
                title: item.fields.title,
                description: item.fields.description,
            }
            
        }) 
        return items;
    })
}


function main() {
    const header = document.querySelector(".header");
    const aboutMe = document.querySelector(".about-me");
    const services = document.querySelector(".services");
    const contactMe = document.querySelector(".contact-me");
    const footer = document.querySelector(".footer");

    headerComponent(header);
    aboutMeComponent(aboutMe);
    servicesComponent(services);
    contactMeComponent(contactMe);
    contactMeForm();
    footerComponent(footer);

    getServices().then((items)=>{
        for (const i of items) {
            addServices(i);
        }
    })
}

main();