import React from "react"
import { 
    Link,
    Form,
    useLoaderData,
    useActionData,
    useNavigation,
    redirect
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("isLoggedIn", "true")
        return redirect(pathname)
    }
    catch (err) {
        return err.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

    return (
        <div className="container">
            <h2>Sign in to your account</h2>
            { errorMessage && <h2>{errorMessage}</h2>}
            { message && <p>{message}</p>}
            <Form method="post" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>
                    { navigation.state === "submitting" ? "Loging in..." : "Log in"}
                </button>
            </Form>
            <p>Don’t have an account? <Link>Create one now</Link></p>
        </div>
    )
}