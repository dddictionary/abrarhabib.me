export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <footer className="footer">
                <form className="contact">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
                <div className="links">
                    <a href="https://www.github.com/dddictionary"> GitHub</a>
                    <a href="https://www.linkedin.com/in/abrar-habib1/"> LinkedIn</a>
                    <a href="../src/assets/Abrar_Habib_Resume.pdf"> Resume </a>
                </div>
            </footer>
        </div>
    )
}