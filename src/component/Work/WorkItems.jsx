
export default function WorkItems({ item }) {

    return (
        <div className="work__card" key={item.id}>
            <div className="work__img">
                <img src={item.image} alt="Work image" />
            </div>

            <div className="work__content">
                <h3 className="work__title">{item.title}</h3>

                <div className="link_container">
                    <a target="_blank" href={item.url} className="work__button">
                        Demo<i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                    <a target="_blank" href={item.github} className="work__button">
                        <i class='bx bxl-github'></i>
                    </a>
                </div>
            </div>
        </div>
    )
};