import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id={parentClass}>
            {pageLinks.map((link) => {
                return (
                    <PageLink kye={link.id} link={link} itemClass={itemClass} />
                )
            })}
        </ul>
    )
}
export default PageLinks