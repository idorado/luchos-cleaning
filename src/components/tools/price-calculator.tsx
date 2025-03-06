"use client"
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'

const calculatorSchema = z.object({
  serviceType: z.enum(['residential', 'commercial']),
  squareFeet: z.number().min(100).max(10000),
  bedrooms: z.number().min(1).max(10),
  bathrooms: z.number().min(1).max(10),
  frequency: z.enum(['weekly', 'bi-weekly', 'monthly', 'one-time']),
  facilityType: z.enum(['office', 'retail', 'medical', 'other']).optional(),
  addons: z.array(z.string()).optional(),
})

export function PriceCalculator() {
  const [estimate, setEstimate] = useState<number | null>(null)
  const form = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      serviceType: 'residential',
      squareFeet: 1500,
      bedrooms: 3,
      bathrooms: 2,
      frequency: 'weekly'
    }
  })

  const serviceType = form.watch('serviceType')
  const squareFeet = form.watch('squareFeet')
  const frequency = form.watch('frequency')

  const calculateEstimate = () => {
    const base = serviceType === 'residential' ? 100 : 200
    const sqftRate = serviceType === 'residential' ? 0.15 : 0.10
    const frequencyMultiplier = {
      'weekly': 1,
      'bi-weekly': 0.85,
      'monthly': 0.75,
      'one-time': 1.2
    }[frequency]

    let total = (base + (squareFeet * sqftRate)) * frequencyMultiplier
    
    if (serviceType === 'residential') {
      total += (form.getValues('bedrooms') * 15) + (form.getValues('bathrooms') * 25)
    }
    
    setEstimate(Math.round(total))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Cleaning Cost Estimator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onChange={calculateEstimate} className="space-y-6">
            <FormField
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              name="squareFeet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Square Footage ({squareFeet.toLocaleString()} ft²)
                  </FormLabel>
                  <FormControl>
                    <Slider
                      min={100}
                      max={10000}
                      step={100}
                      value={[field.value]}
                      onValueChange={([val]) => field.onChange(val)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {serviceType === 'residential' && (
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrooms</FormLabel>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bathrooms</FormLabel>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {serviceType === 'commercial' && (
              <FormField
                name="facilityType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select facility type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="retail">Retail Space</SelectItem>
                        <SelectItem value="medical">Medical Facility</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            )}

            <FormField
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Frequency</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="one-time">One-Time</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              name="addons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Services ($15-50 each)</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {['Window Cleaning', 'Appliance Interior', 'Carpet Cleaning', 'Deep Sanitization'].map((addon) => (
                      <label key={addon} className="flex items-center space-x-2">
                        <Checkbox
                          value={addon}
                          checked={field.value?.includes(addon)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), addon]
                              : field.value?.filter((v) => v !== addon)
                            field.onChange(newValue)
                            calculateEstimate()
                          }}
                        />
                        <span>{addon}</span>
                      </label>
                    ))}
                  </div>
                </FormItem>
              )}
            />

            {estimate && (
              <div className="mt-8 text-center">
                <Separator className="mb-4" />
                <div className="text-2xl font-bold">
                  Estimated Cost: ${estimate.toLocaleString()}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  * Final price may vary based on specific requirements
                </p>
                <Button className="mt-4" size="lg">
                  Request Detailed Quote
                </Button>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}