"use server"

import { db } from "@/lib/db"
import { subscribers } from "@/lib/db/schema"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const raw = formData.get("email")
  const source = (formData.get("source") as string) || "community"
  const email = typeof raw === "string" ? raw.trim().toLowerCase() : ""

  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address." }
  }

  try {
    await db
      .insert(subscribers)
      .values({ email, source })
      .onConflictDoNothing({ target: subscribers.email })

    return {
      status: "success",
      message: "You're in. Welcome to the movement.",
    }
  } catch (err) {
    console.log("[v0] subscribe error:", err)
    return {
      status: "error",
      message: "Something went wrong. Try again.",
    }
  }
}
