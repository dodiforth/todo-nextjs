//ShadCn UI
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button";

//CSS
import styles from "./page.module.scss";
function page() {
  return <div className={styles.container}>
    <header className={styles.container__header}>
        <div className={styles.container__header__contents}>
            <input type="text" placeholder="Enter Title Here" className={styles.input}/>
            <div className={styles.progressBar}>
                <span className={styles.progressBar__status}>0/10 completed</span>
                {/* ProgressBar UI */}
                <Progress value={33} className="w-[30%] h-2" indicatorColor="bg-green-400"/>
            </div>
            <div className={styles.calendarBox}>
                <div className={styles.calendarBox__calendar}>
                    {/* Calander UI */}
                </div>
            </div>
            <Button variant={"outline"} className="w-[15%] border-orange-500 bg-orange-400 text-white hover:bg-orange-400 hover:text-white">
                Add New Board
            </Button>
        </div>
    </header>
    </div>;
}

export default page;
