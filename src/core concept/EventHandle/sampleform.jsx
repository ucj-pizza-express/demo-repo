export default function Form (){
    
    const handle = (event)=>{
        event.preventDefault(); // prevent chorme refresh 
console.log(event.target.fname.value);   // First name
    console.log(event.target.mail.value);    // Email
    console.log(event.target.date.value);    // Date

    // Checkboxes (use .checked)
    console.log(event.target.male.checked);   // true/false
    console.log(event.target.female.checked); // true/false
  

    }
       return <>
    <form  onSubmit={handle}>
        <h1>Fill the form</h1>
    <input type="text" name="fnam" id="" placeholder="Firstname" /> <br /> 
    <input type="email" name="mail" id="" placeholder="Email"/> <br />
    <input type="date" name="date" id="" /><br />
    <input type="checkbox" name="male" id="s1" /> male <input type="checkbox" name="female" id="s1" /> female <br />
    <input type="submit"  className="bg-color" />
    </form>
    </>
}