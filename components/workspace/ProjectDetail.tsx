import { useTranslation } from "next-i18next";
import { useRouter } from "next/router"

export default function ProjectDetail() {
  const router = useRouter()
  const queries = router.query

  const { t } = useTranslation('common'); 
  return (
    <div>프로젝트 디테일 페이지_{t('description')}  /{queries.project}/{queries.id}</div>
  )
}
