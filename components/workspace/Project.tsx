import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next';

export default function Project() {
    const router = useRouter()
    const queries = router.query
    const array1 =  [...Array(Number(queries.project))].map((_,i) => i);

    const { t } = useTranslation('common'); 
  return (
    <div>
        프로젝트 페이지 /{queries.project}
        { 
            array1.map((_,index) => (
                <div key={`project_${index}`}>
                    <Link href={`${queries.project}/${index+1}`} >
                        디테일_{t('description')} /{queries.project}/{index+1}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
