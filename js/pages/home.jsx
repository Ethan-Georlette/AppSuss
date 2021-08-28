import { HomeFeatures } from "../cmps/home-features.jsx";
import { HomeHero } from "../cmps/home-hero.jsx";
import { HomeTeam } from "../cmps/home-team.jsx";

export class Home extends React.Component {

    render() {
        return (
            <section className="home">
                <HomeHero/>
                <HomeFeatures/>
                <HomeTeam/>
            </section>
        )
    }
}