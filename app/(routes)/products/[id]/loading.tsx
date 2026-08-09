import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <Skeleton className="aspect-[4/3] rounded-3xl" />
      <div className="space-y-4"><Skeleton className="h-6 w-24" /><Skeleton className="h-12 w-3/4" /><Skeleton className="h-8 w-32" /><Skeleton className="h-28 w-full" /></div>
    </div>
  )
}
