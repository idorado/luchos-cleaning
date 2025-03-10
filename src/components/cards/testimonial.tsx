"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { Star } from 'lucide-react'
import { client } from "@/lib/client"

export function Testimonial() {
  const { data: testimonials, isPending } = useQuery({
    queryKey: ["testimonials-recent"],
    queryFn: async () => {
      const res = await client.testimonials.recent.$get()
      return res.json()
    },
  })

  if (isPending) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
            <span className="text-sm text-muted-foreground">Loading testimonials...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Customer Experiences</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {testimonials && testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={`star-${testimonial.id}-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mt-2 inline-block">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">No testimonials available at the moment.</p>
        )}
      </CardContent>
    </Card>
  )
}