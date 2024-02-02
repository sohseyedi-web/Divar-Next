"use client"
import * as RiIcon from 'react-icons/ri'

const LikeAdvs = ({product}) => {
  return (
    <button className="btn btn-ghost border-none text-red-600">
      {product?.isLiked ? (
        <RiIcon.RiHeart3Fill className="w-6 h-6 text-red-600" />
      ) : (
        <RiIcon.RiHeart3Line className="w-6 h-6 text-red-600" />
      )}
    </button>
  )
}

export default LikeAdvs