import ChartOverview from '@/components/chart';
import Sales from '@/components/sales';
import { } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Package, Percent } from 'lucide-react';

export default function Home() {
  return (
    <main className='sm:ml-14 p-4'>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card borderColor='gray-300'>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm-text-xl text-gray-800 select-none'>
                Total Vendas
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
              Total de vendas nos ultimos 30 dias
            </CardDescription>

            
          </CardHeader>

          <CardContent>
              <p className='text-base sm:text-lg font-bold'>R$ 52.537</p>
            </CardContent>
        </Card>


        <Card borderColor='gray-300'>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm-text-xl text-gray-800 select-none'>
                Novos Clientes
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
                Novos clientes nos ultimos 30 dias
            </CardDescription>

            
          </CardHeader>
          
          <CardContent>
              <p className='text-base sm:text-lg font-bold'>412</p>
            </CardContent>
        </Card>



        <Card borderColor='gray-300'>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm-text-xl text-gray-800 select-none'>
                Pedidos Hoje
              </CardTitle>
              <Percent className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
                Total de pedidos hoje
            </CardDescription>

            
          </CardHeader>
          
          <CardContent>
              <p className='text-base sm:text-lg font-bold'>222</p>
            </CardContent>
        </Card>



        <Card borderColor='gray-300'>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm-text-xl text-gray-800 select-none'>
                Pedidos Entregues
              </CardTitle>
              <Package className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>
                Pedidos entregues nos ultimos 30 dias
            </CardDescription>

            
          </CardHeader>
          
          <CardContent>
              <p className='text-base sm:text-lg font-bold'>1171</p>
            </CardContent>
        </Card>

      </section>

      <section className='mt-4 flex flex-col md:flex-row gap-4'>
      <ChartOverview/>
      <Sales/>
      </section>
    </main>
  );
}