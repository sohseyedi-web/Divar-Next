import CategoryByFilter from '@/components/CategoryByFilter'
import CategoryBySort from '@/components/CategoryBySort'

const CategorySidebar = () => {
  return (
    <div>
        <CategoryBySort/>
        <CategoryByFilter/>
    </div>
  )
}

export default CategorySidebar