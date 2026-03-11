import Image from "next/image"

export default function ProductImage() {
  return (
    <div className="bg-gray-200">
      <Image src="/vercel.svg" alt="picture of window" width={500} height={300} />
    </div>
  )
}