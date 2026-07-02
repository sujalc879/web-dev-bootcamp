import { AuthBanner } from "../components/AuthBanner";
import { AuthCredentials } from "../components/AuthCredentials";

export function Auth() {
    return <div style={{
        display : "flex"
    }}>
        <AuthBanner />
        <AuthCredentials />
    </div>
}