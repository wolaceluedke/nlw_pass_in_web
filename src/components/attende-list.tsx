import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronsRight, ChevronRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table.header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeList() {
  return (
   <div className='flex flex-col gap-4'>
     <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div  className="flex items-center gap-3 w-72 rounded-lg text-sm px-3 py-1.5 border border-white/10">
        <Search className='size-4 text-emerald-300' />
    <input placeholder="Buscar Participante" className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0" />
      </div>
    </div>

<Table>
      <thead>
        <tr className='border-b border-white/10'>
          <TableHeader style={{ width: 48 }} >
            <input type='checkbox ' className='size-4 bg-black/20 rounded border border-white/10'/>
          </TableHeader>
          <TableHeader>Código</TableHeader>
          <TableHeader>Participante</TableHeader>
          <TableHeader>Data da incrição</TableHeader>
          <TableHeader>Data do check-in</TableHeader>
          <TableHeader style={{ width: 64 }}  ></TableHeader>
        </tr>
        </thead>
        <tbody>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <TableRow key={i} >
            <TableCell>
              <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 ' />
              </TableCell>
              <TableCell>12345</TableCell>
              <TableCell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>Wolace</span>
                  <span>wolacepin@hotmail.com</span>
                </div>
              </TableCell>
              <TableCell>7 dias atrás</TableCell>
              <TableCell>3 dias atrás</TableCell>
              <TableCell>
                <IconButton transparent={true}>
                  <MoreHorizontal className='size-4' />
                </IconButton>
              </TableCell>
          </TableRow>
          )
        })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
            Mostrando 10 de 228 items</TableCell>
            <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
            <div className='items-center gap-8 inline-flex'>
              <span>Página 1 de 23</span>
            
            <div className='flex gap-1.5'>
                <IconButton>
                  <ChevronsLeft className='size-4' />
                </IconButton>
                <IconButton>
                  <ChevronLeft className='size-4' />
                </IconButton>
                <IconButton>
                  <ChevronRight className='size-4' />
                </IconButton>
                <IconButton>
                  <ChevronsRight className='size-4' />
                </IconButton>
            </div>
            </div>
            </td>
          </tr>
        </tfoot>
    </Table>
   </div>
  )
}