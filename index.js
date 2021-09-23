
const addTable=()=>{
    details={
        id:`${Date.now()}`,
        stdName: document.getElementById("name").value,
        stdPlace: document.getElementById("place").value,
        stdCity: document.getElementById("city").value,
        stdState: document.getElementById("state").value
    }

   const newdetails=document.getElementById("list");
    newdetails.insertAdjacentHTML('beforeend',generateRow(details));
    
}

const generateRow=({id,stdName,stdPlace,stdCity,stdState})=>{
    return(` <tr>
    <td>${stdName}</td>
    <td>${stdPlace}</td>
    <td>${stdCity}</td>
    <td>${stdState}</td>
</tr>`);
}