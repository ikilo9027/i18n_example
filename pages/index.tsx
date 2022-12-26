import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Workspace from '../components/workspace/Workspace'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const array = [1, 6, 33, 41];
  return (
    <>
    { 
      array.map((item) => (
        <div key={`workspace_${item}`}>
          <Workspace id={item}/>
        </div>
      ))
    }
    </>
  )
}
