'use server'

import { createClient } from '@/utils/supabase-server'
import { redirect } from 'next/navigation'


export async function signInWithMagicLink(email: string, fullName: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      data: {
        name: fullName
      },
      emailRedirectTo: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/auth/confirm` : 'http://localhost:3000/auth/confirm'}`,
    }
  })

  if (error) {
    console.error('Error signing up with magic link:', error)
    throw new Error('Failed to sign up with magic link')
  }

  if (data.user) {
    redirect('/auth/confirm')
  }

  return data
}

export async function signInWithGoogle() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/auth/callback` : 'http://localhost:3000/auth/callback'}`,
    },
  })

  if (error) {
    console.error('Error signing in with Google:', error)
    throw new Error('Failed to sign in with Google')
  }

  if (data.url) {
    redirect(data.url)
  }

  return data
}
