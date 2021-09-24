export const getClientToken = () => {
   return fetch('https://localhost:5000/api/generate/token', {
      method: "GET",
      headers: {
         "Content-Type": "applicaton/json"
      }
   }).then(response => response.json()).catch(err => console.log(err))
}
export const makePayment = (data) => {
   return fetch('https://localhost:5000/api/process/payment', {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
      }, body: JSON.stringify(data)
   }).then(response => response.json()).catch(err => console.log(err))

}