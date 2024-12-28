"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {  DollarSign } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";


export function ChartOverview() {

    const chartData = [
        { month: "Janeiro", Ecommerce: 386, Varejo: 180 },
        { month: "Fevereiro", Ecommerce: 505, Varejo: 200 },
        { month: "Março", Ecommerce: 637, Varejo: 220 },
        { month: "Abril", Ecommerce: 473, Varejo: 190 },
        { month: "Junho", Ecommerce: 209, Varejo: 230 },
        { month: "Julho", Ecommerce: 214, Varejo: 140 },
    ]

    const chartConfig = {
        Ecommerce: {
        label: "Ecommerce",
        color: "#2563eb",
        },
        Varejo: {
        label: "Varejo",
        color: "#60a5fa",
        },
    } satisfies ChartConfig
    return (
        <Card borderColor='gray-300'className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800">
            Vendas primeiro semestre 2024
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            </CardHeader>  

            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-200px w-full">
                <BarChart data={chartData}>
                    <CartesianGrid vertical={false}/>
                    <XAxis
                    dataKey={"month"}
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />

                    <ChartTooltip content={<ChartTooltipContent/>}/>
                    <Bar dataKey="Ecommerce" fill="#2563eb" radius={4}/>
                    <Bar dataKey="Varejo" fill="#60a5fa" radius={4}/>
                </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

export default ChartOverview