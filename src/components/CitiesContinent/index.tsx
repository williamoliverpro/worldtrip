import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { City } from "./City";

export function CitiesContinent({ citiesAmount, citiesMostVisited }) {
    return (
        <Box w="100%" mb="1rem">
            <Box maxWidth="1120px" mx={["1rem", "auto"]}>
                <Heading fontSize={["2xl", "2.25rem"]} fontWeight="500" color="#47585B" mb={["1.25rem", "2.5rem"]} >Cidades {citiesAmount > 100 ? '+100' : citiesAmount }
                </Heading>
                <SimpleGrid flex="1" gap="1.5rem" minChildWidth="256px" align="flex-start">
                    
                    {citiesMostVisited.map(city => (
                        <City key={city.id} cityImage={city.cityImageURL} cityName={city.cityName} country={city.cityCountry} countryImage={city.countryImageURL} />
                    ))}

                </SimpleGrid>
            </Box>
        </Box>
    )
}