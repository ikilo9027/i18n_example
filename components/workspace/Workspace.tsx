import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

export default function Workspace(props: any) {
 
  const { t } = useTranslation('common'); 
  const {id} = props
  return (
    <div>
      <Link href={`workspace/${id}`} key={`project_${id}`}>
        워크스페이스_{id}_{t('description')}
      </Link>
    </div>
      
  )
}
