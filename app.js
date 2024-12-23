async function get()
{
   
   const link=  await fetch("https://api.openweathermap.org/data/2.5/weather?q=Minsk&limit=5&appid=cb8c1937ba2ab4009d5f9b08aab609b6")
   const data = await link.json();  
   return data;
}
 function renderinfo(data)
{
  
 for (const i in data.weather[0]) {  
  console.log( i,": ",data.weather[0][i]) 
  }
  for (const i in data.main) {  
  console.log( i,": ",data.main[i])
 }   
} 
async function init()
{
 
   let a= await get()
   console.log(a)
     renderinfo(a);
}
init()