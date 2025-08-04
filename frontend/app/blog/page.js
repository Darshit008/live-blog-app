    "use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-pink-800">All Blog Posts</h1>

      {/* Search Input */}
      <Input
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-100 border-gray-300 focus:border-pink-800 focus:ring-pink-800"
      />

      {/* Category Dropdown */}
      <Select onValueChange={setCategory}>
        <SelectTrigger className="bg-gray-100 border-gray-300 focus:border-pink-800 focus:ring-pink-800">
          <SelectValue placeholder="Filter by Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="tech">Tech</SelectItem>
          <SelectItem value="life">Life</SelectItem>
          {/* Add more as needed */}
        </SelectContent>
      </Select>

      {/* Dummy Blog Cards */}
      <div className="space-y-4">
        {[1, 2, 3].map((id) => (
          <Card key={id} className="hover:shadow-md transition">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-pink-800">Blog Title {id}</h2>
              <p className="text-gray-600">Short description for blog post {id}.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
