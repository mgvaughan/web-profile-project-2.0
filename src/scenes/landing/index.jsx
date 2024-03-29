import background from "../../assets/Picture1.jpg"

const Landing = ({ setSelectedPage }) => {

    return (
        <section id="home" className="z-40 w-full top-0">
{/* className="md:flex md:justify md:items-center md:h-full gap-16 py-10" */}
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '94vh',
                }}>

            </div>

        </section>
    )
}

export default Landing;