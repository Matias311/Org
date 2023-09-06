import "./footer.css"

const Footer = () => {

    return (

        <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://www.aluracursos.com/">
                    <img src="/img/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.aluracursos.com/">
                    <img src="/img/twitter.png" alt="twitter" />
                </a>
                <a href="https://www.aluracursos.com/">
                    <img src="/img/instagram.png" alt="instagram" />
                </a>
            </div>
            <img src="/img/logo.png" alt="org" />
            <strong>Desarrollado por Matias Arias</strong>
        </footer>

    )

}

export default Footer