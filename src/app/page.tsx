
import Slider from '@core-sg/page/Slider';
import WhyChooseUs from '@core-sg/page/why-choose-us';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
       <NextSeo
    useAppDir={true}
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
            type: 'article',
            article: {
                publishedTime: '2022-06-21T23:04:13Z',
                modifiedTime: '2022-01-21T18:04:43Z',
                authors: [
                    'https://www.example.com/authors/@firstnameA-lastnameA',
                    'https://www.example.com/authors/@firstnameB-lastnameB',
                ],
                tags: ['Tag A', 'Tag B', 'Tag C'],
            },
            url: 'www.example.com/next-seo-blog',
            site_name: 'Next Blog'
        }}
    />
<Slider />
</>
  )
}
