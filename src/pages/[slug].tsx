import { GetStaticPaths, GetStaticProps } from "next";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { BannerContinent } from "../components/BannerContinent";
import { InfoContinent } from "../components/InfoContinent";
import { CitiesContinent } from "../components/CitiesContinent";

export default function Continent({ continent }) {
    return (
        <>
            <Header isContinentPage={true}/>
            <BannerContinent title={continent.title} bannerURL={continent.bannerURL} />
            <InfoContinent article={continent.article} countriesAmount={continent.countriesAmount} languagesAmount={continent.languagesAmount} citiesAmount={continent.citiesAmount} />
            <CitiesContinent citiesAmount={continent.citiesAmount} citiesMostVisited={continent.citiesMostVisited} />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params

    const continents = await api.get('continents').then(response => response.data)

    const continent = continents.find(continent => continent.id == slug)

    return {
        props: {
            continent
        },
        revalidate: 60 * 30 // 30 minutes
    }
}