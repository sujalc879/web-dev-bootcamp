export function Input(props) {
    return <input
        type={props.type}
        name="email"
        placeholder={props.placeholder}

        style={{
            padding: "10px",
            borderRadius: "5px",
            border: "2px solid black",
            width: "300px"
        }} >
            
        </input>
}