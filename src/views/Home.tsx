import Banner from '@/components/Banner';
import Page from '@/components/Page';
import Button from '@/components/Texts/Buttons';
import { SubTitle, Title } from '@/components/Texts/Heading';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <Page>
            <Banner
                imgSrc='https://images.unsplash.com/photo-1543459176-4426b37223ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                imgAlt='Natural background image'
            >
                <div className='max-w-4xl absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/4 text-white'>
                    <Title content='The ==magic== of plants and herbs.' />
                    <SubTitle className="mt-2" content='Give mother nature a chance with less ~~distrubuted products~~ but __nature__!' />
                    <Button text="Check out how" className='mt-12'/>
                </div>
            </Banner>

        </Page>
    );
};

export default HomePage;
