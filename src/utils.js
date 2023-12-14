import { redirect } from "react-router-dom"

export function requireAuth(request) {
    const pathname = new URL(request.url).pathname

    if (!localStorage.getItem("isLoggedIn")) {
        throw redirect(`/login?message=You must login in first&redirectTo=${pathname}`)
    }
    return null
}