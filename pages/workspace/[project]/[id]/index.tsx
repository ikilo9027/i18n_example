import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next/types";
import ProjectDetail from "../../../../components/workspace/ProjectDetail"

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
      { params: { project: '',id: '' }, locale: 'ko' },
    ],
    fallback: true,
  }
}

export default function ProjectDetailRouter() {
  return (
    <ProjectDetail />
  )
}
