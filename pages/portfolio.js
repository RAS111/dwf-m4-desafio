function addPortfolio(data = {}){
    const container = document.querySelector(".portfolio__results");
	const template = document.querySelector(".portfolio__template");

    template.content.querySelector(".things__subtitle").textContent = data.title;
    template.content.querySelector(".things__description").textContent = data.description;
    template.content.querySelector(".things__link").href = data.url;
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

 
function getPortfolio(){
    
    const url = "https://cdn.contentful.com/spaces/260af05mooh7/environments/master/entries?access_token=I0iJyvxmIQIWIjosi_-xWr91w4NhuaEIxu0y0x_LFfw&content_type=portfolio";

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
                url: item.fields.url
            }
            
        }) 
        return items;
    })
}

function main(){

    const header = document.querySelector(".header");
    const portfolio = document.querySelector(".portfolio__container");
    const footer = document.querySelector(".footer");

    headerComponent(header);
    portfolioComponent(portfolio);
    footerComponent(footer);

    getPortfolio().then((items)=>{
        for (const i of items) {
            addPortfolio(i);
        }
    })
}

main()