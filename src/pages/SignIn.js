import React, { useState } from "react"
import Layout from "../components/Layout";
import { supabase } from "../supabase";
import { useAuth } from "../auth";

const SignIn = () => {
    const auth = useAuth()
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSignIn = async (e) => {
        e.preventDefault()

        const signIn = await auth.login(email)
        if (signIn.error) {
            setMessage(signIn.error.message)
        } else {
            setMessage("login link has beent sent. link gönderildi")
        }
        setEmail("")
    }
    return (
        <Layout>
            {message && message}
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type={"submit"}>Sign in</button>
            </form>
        </Layout>
    )
}

export default SignIn;