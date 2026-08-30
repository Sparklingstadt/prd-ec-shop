"use client"
import AddItemToCartForm from "./AddItemToCartForm";
import { useState } from "react";
import { Variant } from "@/lib/types";
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProductActions({ variants }: { variants: Variant[]}) {
  const [variantId, setVariantId] = useState(variants[0].id)

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-medium">バリエーションを選択</p>
        <div className="grid gap-2">
        { variants.map(v => (
          <button
            type="button"
            key={v.id}
            className={cn("flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-left text-sm transition hover:border-primary/50", variantId === v.id && "border-primary bg-primary/5 ring-1 ring-primary")}
            onClick={() => setVariantId(v.id)}
          >
            <span className="flex items-center gap-2">{variantId === v.id && <Check className="size-4 text-primary" />}{ v.name }</span>
            <div className="flex items-center">
              <span className="font-semibold">¥{ v.price.toLocaleString() }</span>
            </div>
          </button>
        ))}
        </div>
      </div>
      <AddItemToCartForm variantId={variantId} />
    </div>
  )
}
