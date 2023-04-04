//Api key// +pqVQus7gJbO8tj5VlCRvA==2oGlCeElga3p65V9
//https://api.api-ninjas.com/v1/dadjokes?limit=1
const btn=document.getElementById('btn');
const joke=document.getElementById('joke');
const apiKey="+pqVQus7gJbO8tj5VlCRvA==2oGlCeElga3p65V9";
const options={
    method:"GET",
    headers:{
    "X-Api-Key":apiKey,
    },
}
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){

    try {
        joke.innerText="Updating...";
     btn.disabled=true;
    btn.innerText="Loading...";
    // console.log("clicked");
    const response= await fetch(apiUrl,options);
    const data=await response.json();
    // console.log(data[0].joke);
    btn.disabled=false;
    btn.innerText="Tell me a joke";
    joke.innerText=data[0].joke;
    } catch (error) {
        joke.innerText="An Error happened, Try Again Later...";
        console.log(error);
        btn.disabled=false;
        btn.innerText="Tell me a joke";
    }
     
     
    

}
btn.addEventListener("click",getJoke);
