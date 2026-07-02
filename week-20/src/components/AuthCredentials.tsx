import { useState } from "react";
import { Input } from "./Input";

export function AuthCredentials() {
    const [isHover, setIsHovered] = useState(false);

    return <div style={{
        flex: 6,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20
    }}>

        <Input type={"text"} placeholder={"Email"} />
        <Input type="password" placeholder="Password" />

        <div
        onMouseEnter={() => { setIsHovered(true)}}
        onMouseLeave={() => { setIsHovered(false)}}

            style={{
                padding: "10px",
                borderRadius: "5px",
                border: "2px solid black",
                width: "300px",
                textAlign : "center",
                fontFamily : "Inter, san-serief",
                cursor : "pointer",
                transition : "backgrount-color 0.2 ease",

                backgroundColor : isHover ? "#9ca4a4" : "#ced5d5"


            }}
        > Sign Up </div>

    </div>
}