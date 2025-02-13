import Detail from "src/routes/Detail"
import { CONFIG } from "site.config"
import { NextPageWithLayout } from "../types"
import { getPosts, getPostDetail } from "src/apis"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/constants/queryKey"
import { dehydrate } from "@tanstack/react-query"
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { TPost } from "src/types"

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts
    .filter((post): post is TPost => !!post?.slug)
    .map((post) => ({
      params: { slug: post.slug }
    }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any, IParams> = async (context) => {
  const { slug } = context.params!
  
  try {
    const post = await getPostDetail(slug)
    await queryClient.prefetchQuery(queryKey.post(slug), () => post)

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: CONFIG.revalidateTime,
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true,
    }
  }
}

const DetailPage: NextPageWithLayout = () => {
  return <Detail />
}

export default DetailPage 