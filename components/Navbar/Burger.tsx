

const Burger = ({open, setOpen} : any) => (
    <div>
        <button className="burger" onClick={ () => setOpen(!open) }>
            <div className="lines"/>
            <div className="lines"/>
            <div className="lines"/>
        </button>

        <style jsx>{`
            .burger {
                margin-right: 10px;
                display: none;
                flex-direction: column;
                justify-content: space-around;
                width: 32px;
                height: 32px;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
                z-index: 10;
            }

            .burger:focus {
                outline: none;
            }

            .lines {
                width: 2rem;
                height: 0.25rem;
                background: #FE789A;
                border-radius: 10px;
                transition: all 0.3s linear;
                transform-origin: 1px;
            }
            
            @media (max-width: 1300px) {
                .burger {
                    display: flex;
                }
            }
            @media (max-width: 500px) {
                .lines {
                    width: 1.5rem;
                    height: 0.2rem;
                }
            }
        `}</style>
    </div>
)

export default Burger;