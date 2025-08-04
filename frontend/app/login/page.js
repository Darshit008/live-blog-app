'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-xl py-6">
      <Tabs defaultValue="login">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        {/* Login Tab */}
        <TabsContent value="login">
          <form className="space-y-4">
            <div>
              <Label className= "py-2">Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label className= "py-2">Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <div>
              <Label className= "py-2">Login As</Label>
             <RadioGroup defaultValue="user" className="flex gap-4 mt-2">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="user" id="user" />
    <Label htmlFor="user">User</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="admin" id="admin" />
    <Label htmlFor="admin">Admin</Label>
  </div>
</RadioGroup>

            </div>
            <Button type="submit" className="w-full mt-6 ">Login</Button>
          </form>
        </TabsContent>

        {/* Sign Up Tab */}
        <TabsContent value="signup">
          <form className="space-y-4">
            <div>
              <Label className= "py-2">Username</Label>
              <Input placeholder="Enter your username" />
            </div>
            <div>
              <Label className= "py-2">Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label className= "py-2">Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <Button type="submit" className="w-full mt-6">Sign Up</Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
