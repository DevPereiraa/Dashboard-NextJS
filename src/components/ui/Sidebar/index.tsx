
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home, LogOut, Package, PanelBottom, Settings, Settings2, ShoppingBag, Users } from 'lucide-react'
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'



export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">

        <aside 
        className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r border-gray-300 bg-background sm:flex flex-col'>

            <nav className='flex flex-col items-center gap-4 px-2 py-5'>

                <TooltipProvider>

                    {/* Link 1 */}
                    <Link 
                    href='#'
                    className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-md'
                    >
                    <Package className='w-5 h-5'/>
                    <span className='sr-only'>Dashboard Icon</span>
                    </Link>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link 
                                href='#'
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground'
                                >
                                <Home className='w-5 h-5'/>
                                <span className='sr-only'>Início</span>
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent side='right'>
                            Início
                        </TooltipContent>

                    </Tooltip>

                    {/* Link 2 */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link 
                                href='#'
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground'
                                >
                                <ShoppingBag className='w-5 h-5'/>
                                <span className='sr-only'>Pedidos</span>
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent side='right'>
                            Pedidos
                        </TooltipContent>

                    </Tooltip>


                    {/* Link 3 */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link 
                                href='#'
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground'
                                >
                                <Package className='w-5 h-5'/>
                                <span className='sr-only'>Produtos</span>
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent side='right'>
                            Produtos
                        </TooltipContent>

                    </Tooltip>



                    {/* Link 4 */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link 
                                href='#'
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground'
                                >
                                <Users className='w-5 h-5'/>
                                <span className='sr-only'>Clientes</span>
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent side='right'>
                            Clientes
                        </TooltipContent>

                    </Tooltip>



                    {/* Link 5 */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link 
                                href='#'
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground'
                                >
                                <Settings2 className='w-5 h-5'/>
                                <span className='sr-only'>Configurações</span>
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent side='right'>
                            Configurações
                        </TooltipContent>

                    </Tooltip>
                </TooltipProvider>

            </nav>


            <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>

                <TooltipProvider>
                <Tooltip>
                        <TooltipTrigger asChild>
                            <Link 
                                href='#'
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-red-500'
                                >
                                <LogOut className='w-5 h-5'/>
                                <span className='sr-only'>Sair</span>
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent side='right'>
                            Sair
                        </TooltipContent>

                    </Tooltip>
                </TooltipProvider>

            </nav>
        </aside>





            <div style={{ borderBottom: '1px solid #1f2937'}} className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 ">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className='sm:hidden'>
                                <PanelBottom className='w-5 h-5'/>
                                <span className='sr-only'>Open / Close Menu</span>
                            </Button>
                        </SheetTrigger>
                        

                        <SheetContent side='left' className='sm:max-w-x '>
                        <nav className='grid gap-6 text-lg font-medium'>

                            {/* Link 1 */}
                            <Link href="#"
                            className='flex h-10 w-10 bg-primary rounded-md text-lg items-center justify-center text-primary-foreground md:text-base gap-2'
                            prefetch={false}
                            >
                            
                            <Package className='w-5 h-5 transition-all'/>
                            <span className='sr-only'>Logo</span>
                            </Link>


                            {/* Link 2 */}
                            <Link href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            prefetch={false}
                            >
                            
                            <Home className='w-5 h-5 transition-all'/>
                            Início
                            </Link>


                             {/* Link 3 */}
                            <Link href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            prefetch={false}
                            >
                            
                            <ShoppingBag className='w-5 h-5 transition-all'/>
                            Pedidos
                            </Link>


                            {/* Link 4 */}
                            <Link href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            prefetch={false}
                            >
                            
                            <Package className='w-5 h-5 transition-all'/>
                            Produtos
                            </Link>


                            {/* Link 5 */}
                            <Link href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            prefetch={false}
                            >
                            
                            <Users className='w-5 h-5 transition-all'/>
                            Clientes
                            </Link>


                            {/* Link 6 */}
                            <Link href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            prefetch={false}
                            >
                            
                            <Settings2 className='w-5 h-5 transition-all'/>
                            Configurações
                            </Link>


                            
                            <Link href='#'
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                <LogOut className='w-5 h-5 transition-all'/>
                                Sair
                            </Link>
                        </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}