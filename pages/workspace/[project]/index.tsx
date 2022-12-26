// import { GetStaticPaths } from "next/types"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next/types";
import Project  from "../../../components/workspace/Project"

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export const getStaticPaths: GetStaticPaths = async () => {
  
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      { params: { project: '' }, locale: 'ko' },
    ],
    fallback: true,
  }
}

export default function ProjectRoute() {
  return (
    <Project />
  )
}

