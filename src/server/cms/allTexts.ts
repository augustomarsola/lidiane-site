import { GraphQLClient } from 'graphql-request'
import { gql } from 'graphql-request'
import { cache } from 'react'

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT as string)

const QUERY = gql`
  {
    allContents {
      menuContent {
        about
        contact
        service
      }
    }
  }
`

type AllTextProps = {
  allContents: {
    menuContent: {
      about: string
      contact: string
      service: string
    }
  }[]
}

export const allTexts = cache(async () => {
  const { allContents }: AllTextProps = await hygraph.request(QUERY)
  return allContents[0]
})
