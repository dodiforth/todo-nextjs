// ShadCn UI
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
// CSS
import styles from './SideNavigation.module.scss';

function SideNavigation() {
  return (
    <div className={styles.container}>
        {/*SearchBar*/}
        <div className={styles.container__searchBox}>
            <Input type="text" placeholder="Search." className='focus-vsible:ring-0' />
            <Button variant={"outline"} size="icon">
                <Search className="w-4 h-4"/>
            </Button>
        </div>
        <div className={styles.container__buttonBox}>
            <Button variant={'outline'} className='w-full text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500'>
                Add New Page
            </Button>
        </div>
        <div className={styles.container__todos}>
            <span className={styles.container__todos__label}>Your To Do</span>
        </div>
    </div>
  )
}

export default SideNavigation