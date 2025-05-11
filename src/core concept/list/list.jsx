export default function ListedItem (){
    const items = ['Apple','Mango','Banana']
    return <>
    <h1>Fruits</h1>
    <ul>
        {
            // key props for identify the unique item on react
            items.map((value,index) => <li key={index}>{value}</li>)
        }
    </ul>
    </>
} 