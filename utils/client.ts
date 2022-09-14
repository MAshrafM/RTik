import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '0kzqdd7o',
    dataset: 'production',
    apiVersion: '2022-09-11',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})