"use client"
import * as RiIcon from 'react-icons/ri'

const SavedAdvs = ({product}) => {
  return (
    <button className="btn btn-ghost border-none text-gray-900">
      {product?.isLiked ? (
        <RiIcon.RiBookmarkFill  className="w-6 h-6 text-gray-900" />
      ) : (
        <RiIcon.RiBookmarkLine  className="w-6 h-6 text-gray-900" />
      )}
    </button>
  )
}

export default SavedAdvs