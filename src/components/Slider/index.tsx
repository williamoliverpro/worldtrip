import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Flex } from '@chakra-ui/react';

import { api } from '../../services/api'

import { Slide } from './Slide';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slider() {
    const [continents, setContinents] = useState([])

    useEffect(() => {
        api.get('continents').then(response => setContinents(response.data))
    }, [])

    return (
        <Flex w="100%" h={["15.625rem", "450px"]} mb={["1.5rem", "40px"]} mx="auto" px={["0", "4rem"]}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{ width: '100%', flex: '1', color: "black" }}
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.id}>
                        <Slide link={continent.id} bgImage={continent.bannerURL} continentName={continent.title} subheadingContinent={continent.subTitle} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    )
}