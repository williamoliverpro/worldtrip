import { Flex, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

interface SlideProps {
    link: number
    bgImage: string
    continentName: string
    subheadingContinent: string
}

export function Slide({ link, bgImage, continentName, subheadingContinent }: SlideProps) {

    return (
        <Flex h="100%" w="100%" bgImage={`url(${bgImage})`} backgroundSize="auto" bgPosition="center" align="center" justify="center" textAlign="center" filter="brightness(0.8)">
            <Link href={`/${link}`} prefetch>
                <a>
                    <Heading color="#FFFFFF" fontSize={["2xl", "5xl"]} mb={["0.75rem", "1rem"]} >{continentName}</Heading>
                    <Text color="#FFFFFF" fontSize={["sm", "2xl"]} fontWeight="bold">{subheadingContinent}</Text>
                </a>
            </Link>
        </Flex>
    )
}
