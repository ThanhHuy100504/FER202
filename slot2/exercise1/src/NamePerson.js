function NamePerson(){
    const names = ["Alice", "Bob", "Charlie"];
    return(
        <div>
            <ul>
                {names.map((names, index) => (
                    <li key={index}> {names}</li>
                ))}
            </ul>
        </div>
    );
}

export default NamePerson;