import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export function Sales() {
    return (
        <Card borderColor='gray-300' className="flex-1">
            <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos Clientes
            </CardTitle>
            <Users className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
                Novos clientes nas ultimos 24 horas
            </CardDescription>

            <CardContent>

            </CardContent>
            <article className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Avatar className="w-8 h-8 gap-4">
                    <AvatarImage className="w-8 h-8 rounded-full" src="../avatar.png"/>
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">
                        Gustavo
                    </p>
                    <span className="text-[12px] sm:text-sm text-gray-400">g@gmail.com</span>
                </div>
            </article>


            <article className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Avatar className="w-8 h-8 gap-4">
                    <AvatarImage className="w-8 h-8 rounded-full" src="../avatar.png"/>
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">
                        Gustavo
                    </p>
                    <span className="text-[12px] sm:text-sm text-gray-400">g@gmail.com</span>
                </div>
            </article>


            <article className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Avatar className="w-8 h-8 gap-4">
                    <AvatarImage className="w-8 h-8 rounded-full" src="../avatar.png"/>
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">
                        Gustavo
                    </p>
                    <span className="text-[12px] sm:text-sm text-gray-400">g@gmail.com</span>
                </div>
            </article>
            </CardHeader> 
        </Card>
    );
}

export default Sales