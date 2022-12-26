// import { Project } from "@components/workspace/Project"
import Workspace  from "../../components/workspace/Workspace"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next/types";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function WorkspaceRoute() {
  return (
    <Workspace/>
  )
}
