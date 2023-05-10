import "../../Styles/Layout/Footer.css"

const Footer =()=> {

    const helps = [
        {
            title:'How to join?',
            class:'To-Register',
            navigate:''
        },

        {
            title:'How to update data?',
            class:'Find-Course',
            navigate:''
        },

        {
            title:'How to give ratings?',
            class:'Give-Ratings',
            navigate:''
        },
    ]

    const information = [
        {
            icon:'bi bi-geo-alt-fill',
            content:`17/2, Stright-Road, Moratuwa,`,
            other:'Sri-Lanka'
        },

        {
            icon:'bi bi-telephone-fill',
            content:'+94772234578'
        },

        {
            icon:'bi bi-envelope-at-fill',
            content:'info@canacademy.com'
        },
    ]

    const socials = [
        {
            icon:'bi bi-facebook',
            name:''
        },

        {
            icon:'bi bi-linkedin',
            name:''
        },

        {
            icon:'bi bi-whatsapp',
            name:''
        },
    ]

    return (
        <div className="Footer px-5">
            <div className="px-5 py-5">
                <div className="row g-0 py-5">
                    <div className="col-3">
                        <div className="Footer-Title">
                            <div className="Footer-Icon">
                                <i class="bi bi-buildings-fill"></i>
                            </div>

                            <h5 className="ms-2">CAN Academy</h5>
                        </div>

                        <div className="Company-Information mt-4">
                            {information.map((info) => (
                                <div className="Single-Info">
                                    <i class={info.icon}></i>
                                    <p>{info.content} <br></br>{info.other}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="Footer-Title">
                            <div className="Footer-Icon">
                                <i class="bi bi-info-circle-fill"></i>
                            </div>

                            <h5 className="ms-2">Information</h5>
                        </div>

                    </div>

                    <div className="col-3">
                        <div className="Footer-Title">
                            <div className="Footer-Icon">
                                <i class="bi bi-binoculars-fill"></i>
                            </div>

                            <h5 className="ms-2">Quick Links</h5>
                        </div>

                    </div>

                    <div className="col-3">
                        <div className="Footer-Title">
                            <div className="Footer-Icon">
                                <i class="bi bi-book-half"></i>
                            </div>

                            <h5 className="ms-2">Help and Support</h5>
                        </div>

                        <div className="row gy-0 gx-2 mt-4">
                            {helps.map((help) => (
                                <div className="col-4">
                                    <div className={help.class}>
                                         <div className="Align-Help px-1 pb-1">
                                            <p>{help.title}</p>
                                         </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Footer-Seperater"/>

                <div className="Footer-End mt-3">
                    <p>Copyright &copy;2023 All rights reserved</p>

                    <div className="Social-Links">
                        {socials.map((social) => (
                            <div className="Social-Icon">
                                <i class={social.icon}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer