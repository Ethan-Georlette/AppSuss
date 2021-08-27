const { Link } = ReactRouterDOM;
export class HomeHero extends React.Component {

    render() {
        return (
                <div className="hero flex column center space-between">
                    <img className="main-hero" src="../assets/img/main/hero.png" />
                    <title className="flex hero-title">
                        <div className="icon"></div>
                        <h1>AppSuss-3 in 1</h1>
                    </title>
                    <h2>Be more productive with AppSuss's Email,Keep and Books store</h2>
                    <div className="hero-links flex">
                        <Link to="/mail">
                            <div className="link-button">
                                <h1>Mail</h1>
                            </div>
                        </Link>
                        <Link to="/keep">
                            <div className="link-button">
                                <h1>Keep</h1>
                            </div>
                        </Link>
                        <Link to="/books">
                            <div className="link-button">
                                <h1>Books Shop</h1>
                            </div>
                        </Link>
                    </div>
                </div>
        )
    }
}