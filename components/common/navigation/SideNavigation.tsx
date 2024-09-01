// ShadCn UI
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
// CSS
import styles from './SideNavigation.module.scss';

function SideNavigation() {
  return (
    <div className={styles.container}>
        {/*SearchBar*/}
        <div className={styles.container__searchBox}>
            <Button variant={"outline"} size="icon">
                <Search className='w-4 h-4'/>
            </Button>
        </div>
    </div>
  )
}

export default SideNavigation