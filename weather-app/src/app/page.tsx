"use client";

import CityPicker from "@components/CityPicker";
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#18387E] p-10 flex flex-col justify-center items-center" >
    <Card className="max-w-4xl mx-auto bg-white rounded-md">  
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Built with OpenAI, Nex.js, Tailwind CSS, Tremor, GraphQL and more!
        </Subtitle>

        <Divider className="my-10"/>

        <Card className="bg-gradient-to-br from-[#394F68] to-[#18387E]"> 
        <CityPicker/>
        </Card>
      </Card>  
    </div>
  )
}
