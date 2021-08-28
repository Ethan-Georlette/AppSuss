import { LongText } from "./LongTxt.jsx";

const { Link } = ReactRouterDOM;
export function HomeFeatures() {
    return (
        <section className="home-features">
            <div className="feature-home">
                <img src="../assets/img/main/mail.png" />
                <h1>Mail-Box</h1>
                <LongText txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci similique, quam ratione perferendis repellendus omnis odit accusantium facere, suscipit exercitationem quasi, ducimus at blanditiis beatae sit porro labore possimus numquam!"/>
                <Link>
                    Go to Mail
                </Link>
            </div>
            <div className="feature-home">
                <img src="../assets/img/main/keep.png" />
                <h1>Keep</h1>
                <LongText txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci similique, quam ratione perferendis repellendus omnis odit accusantium facere, suscipit exercitationem quasi, ducimus at blanditiis beatae sit porro labore possimus numquam!"/>
                <Link>
                    Go to Keep
                </Link>
            </div>
            <div className="feature-home">
                <img src="../assets/img/main/book.png" />
                <h1>Books Shop</h1>
                <LongText txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci similique, quam ratione perferendis repellendus omnis odit accusantium facere, suscipit exercitationem quasi, ducimus at blanditiis beatae sit porro labore possimus numquam!"/>
                <Link>
                    Go to shop
                </Link>
            </div>
        </section>
    )

}