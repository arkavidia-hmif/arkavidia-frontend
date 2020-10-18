

const Burger = ({open, setOpen} : any) => (
    <div>
        <button className="burger" onClick={ () => setOpen(!open) }>
            <div className="lines"/>
            <div className="lines"/>
            <div className="lines"/>
        </button>

        <style jsx>{`
            .burger {
                margin-left: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 2rem;
                height: 2rem;
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
                position: relative;
                transform-origin: 1px;
            }

        `}</style>
    </div>
)

export default Burger;