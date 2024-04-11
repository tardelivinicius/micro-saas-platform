'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react'
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false})
      toast({
        title: 'Check your email',
        description: 'We sent a magic link to your email',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      })
      console.log(error)
    }
  })
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4 py-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Acme</h1>
        <p className="text-gray-500 dark:text-gray-400">Magic link login</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto w-[350px] space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')}/>
        </div>
        <Button className="w-full">Send Magic Link</Button>
      </form>
    </div>
  )
}
