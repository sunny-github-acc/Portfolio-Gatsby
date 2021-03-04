import React from 'react'
import Layout from "../components/Layout"
import { useLocation } from "@reach/router"

export default function Contact() {
    const { pathname } = useLocation();
    console.log('pathname', pathname)
    console.log('pathname', "pathname")
    return (
        <Layout>
            <div className="container">
                <section className="contact">
                    <form action="">
                        Contact Me
                    </form>
                </section>
            </div>
        </Layout>
    )
}
