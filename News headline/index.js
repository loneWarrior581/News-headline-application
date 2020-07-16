console.log("this is the news for the today");
let newsAccordion = document.getElementById("newsAccordion");
let source='';
let apikey='a12ad82107a041c4bc57f5c5ed6a6831';
const xhr= new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,true)


xhr.onload=function(){
    if(this.status==200){
    let json=JSON.parse(this.responseText);
    let articles=json.articles;
    let newshtml="";
    articles.forEach((element,index) => {
        console.log(element)

        let news = `<div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn  btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}" style="color:rgb(9, 63, 164);font-size:18px;font-weight:bold"><b style="color:red">Breaking News: ${index+1}</b> ${element.title}</button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body" style="font-size:20px">${element.content}.<a href="${element.url} " target="_blank">Read more..</a></div>
                </div>
            </div>`
            newshtml+=news;
            console.log(element.content)
    });
    newsAccordion.innerHTML=newshtml;
    }
    else{
        console.log("some error occured");
    }
}
xhr.send();


