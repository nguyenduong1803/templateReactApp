import { useState } from 'react'
import styles from "./Tabs.module.css"

function Tabs({ listTab }) {
    const [active, setActive] = useState(0)
    const Component = listTab[active].component
    return (
        <div>
            <div className={`${styles.wrapTabs} ${styles.wrapTabsAccount} d-flex `}>
                {listTab.map((tab, index) => {
                    const Icon = tab.icon
                    return (
                        <div
                            key={index} onClick={() => setActive(index)}
                            className={active === index ? `${styles.tabItemAccount} ${styles.active}` : styles.tabItemAccount}
                        >
                            {/* <Icon className={styles.iconTabAccount}/> */}
                          <p>  {tab.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.wrapComponent}> <Component /></div>
        </div>
    )
}

export default Tabs